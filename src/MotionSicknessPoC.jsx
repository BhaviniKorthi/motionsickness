import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const GRAVITY = 9.81;
const SCALE_FACTOR = 1.8;
const ALIGNMENT_THRESHOLD = 5; 
const TRAJECTORY_IMAGE = '/trajaectory_path.png';

const SPEED_CONFIG = {
    '20': { label: '20', csv: '/20_kph_data.ChannelGroup_0.csv' },
    '35': { label: '35', csv: '/35kph_data.ChannelGroup_0.csv' },
    '50': { label: '50', csv: '/50kph_data.ChannelGroup_0.csv' },
};

const getShortestDiff = (a, b) => {
    let d = a - b;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    return d;
};

const parseCsv = (text) => {
    const lines = text.trim().split('\n');
    const data = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',');
        if (cols.length >= 2) {
            const timestamp = parseFloat(cols[0]);
            const ay = parseFloat(cols[1]);
            if (!isNaN(timestamp) && !isNaN(ay)) {
                data.push({ timestamp, ay });
            }
        }
    }
    return data;
};

const AngleChart = ({ csvData, bioHistory, playbackTime, height = 100 }) => {
    if (!csvData || csvData.length === 0) return null;

    const margin = { top: 5, right: 10, bottom: 15, left: 35 };
    const width = 600;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const sampledTarget = useMemo(() => csvData.filter((_, i) => i % 10 === 0), [csvData]);
    const maxAy = Math.max(...sampledTarget.map(d => Math.abs(d.ay)), 0.01);
    const maxTheta = Math.atan(maxAy / GRAVITY) * (180 / Math.PI);

    const totalTime = csvData[csvData.length - 1].timestamp;
    const getX = (t) => (t / (totalTime || 1)) * innerWidth;
    const getY = (ay) => {
        const theta = Math.atan(ay / GRAVITY) * (180 / Math.PI);
        return innerHeight / 2 - (theta / (maxTheta || 1)) * (innerHeight / 2);
    };

    const targetPoints = sampledTarget.map((d) => `${getX(d.timestamp)},${getY(d.ay)}`).join(' ');

    const bioPointsData = bioHistory.length > 1 ? bioHistory.filter((_, i) => i % 5 === 0) : [];
    
    const bioPointsStr = bioPointsData.map((d) => {
        const theta = d.roll * (180 / Math.PI);
        return `${getX(d.time)},${innerHeight / 2 - (theta / (maxTheta || 1)) * (innerHeight / 2)}`;
    }).join(' ');

    const currentX = getX(playbackTime);

    return (
        <div className="w-full bg-[#0b1120] rounded-xl border border-slate-800/50 p-2 shadow-inner">
            <div className="flex justify-between items-center mb-1 px-2">
                <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Tilt Comparison (Target vs Actual)</h4>
                <div className="flex space-x-3 text-[8px] font-bold">
                    <span className="flex items-center text-blue-500"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1" /> GIV Target</span>
                    <span className="flex items-center text-rose-400"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 mr-1" /> User Head</span>
                    <span className="flex items-center text-rose-600"><span className="w-1.5 h-1.5 rounded-full bg-rose-600 mr-1" /> Error &gt; {ALIGNMENT_THRESHOLD}°</span>
                </div>
            </div>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    <line x1="0" y1={innerHeight / 2} x2={innerWidth} y2={innerHeight / 2} stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2" />
                    <text x="-3" y={innerHeight / 2} fill="#475569" fontSize="8" textAnchor="end" dominantBaseline="middle">0°</text>
                    
                    <polyline fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" points={targetPoints} strokeLinejoin="round" />
                    
                    {bioPointsStr && <polyline fill="none" stroke="#fb7185" strokeWidth="1.5" points={bioPointsStr} strokeLinejoin="round" />}
                    
                    {bioPointsData.map(d => {
                        if (d.targetRad === undefined) return null;
                        const errDeg = Math.abs(getShortestDiff(d.roll, d.targetRad)) * (180 / Math.PI);
                        
                        if (errDeg > ALIGNMENT_THRESHOLD) {
                            const theta = d.roll * (180 / Math.PI);
                            const cx = getX(d.time);
                            const cy = innerHeight / 2 - (theta / (maxTheta || 1)) * (innerHeight / 2);
                            return <circle key={d.time} cx={cx} cy={cy} r="2" fill="#e11d48" />;
                        }
                        return null;
                    })}

                    <line x1={currentX} y1="0" x2={currentX} y2={innerHeight} stroke="#ef4444" strokeWidth="1" strokeDasharray="2" />
                </g>
            </svg>
        </div>
    );
};

export default function MotionSicknessPoC() {
    const [selectedSpeed, setSelectedSpeed] = useState('50');
    const [csvData, setCsvData] = useState([]);
    const [playbackTimeState, setPlaybackTimeState] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const [aLat, setALat] = useState(0);
    const [currentAy, setCurrentAy] = useState(0);
    const [direction, setDirection] = useState('left');
    const [predictedTheta, setPredictedTheta] = useState(0);

    const [isCameraEnabled, setIsCameraEnabled] = useState(false);
    const [currentHeadRoll, setCurrentHeadRoll] = useState(0);
    const [bioHistory, setBioHistory] = useState([]);
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const mountRef = useRef(null);
    const videoRef = useRef(null);
    const faceLandmarkerRef = useRef(null);

    const csvDataRef = useRef([]);
    const playbackTimeRef = useRef(0);
    const playbackIndexRef = useRef(0);
    const isPlayingRef = useRef(false);

    const simDataRef = useRef({
        aLat: 0,
        direction: 'left',
        currentAy: 0,
        isPlaying: false,
        isCameraEnabled: false,
        currentHeadRoll: 0,
    });

    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    useEffect(() => {
        simDataRef.current = {
            aLat,
            direction,
            currentAy,
            isPlaying,
            isCameraEnabled,
            currentHeadRoll,
        };
    }, [aLat, direction, currentAy, isPlaying, isCameraEnabled, currentHeadRoll]);

    const applyDataPoint = (entry, time) => {
        setCurrentAy(entry.ay);
        setALat(Math.abs(entry.ay));
        setDirection(entry.ay >= 0 ? 'left' : 'right');

        const lookAheadTime = time + 1.0;
        const data = csvDataRef.current;
        let idx = playbackIndexRef.current;
        while (idx < data.length - 1 && data[idx].timestamp < lookAheadTime) idx++;
        setPredictedTheta(Math.atan(data[idx].ay / GRAVITY) * (180 / Math.PI));
    };

    const resetPlayback = () => {
        playbackTimeRef.current = 0;
        playbackIndexRef.current = 0;
        setPlaybackTimeState(0);
        setBioHistory([]);
        if (csvDataRef.current.length > 0) {
            applyDataPoint(csvDataRef.current[0], 0);
        }
    };

    useEffect(() => {
        const loadCSV = async () => {
            try {
                const response = await fetch(SPEED_CONFIG[selectedSpeed].csv);
                const text = await response.text();
                const data = parseCsv(text);
                csvDataRef.current = data;
                setCsvData(data);
                setIsPlaying(false);
                isPlayingRef.current = false;
                resetPlayback();
            } catch (err) {
                console.error('Error loading CSV:', err);
            }
        };
        loadCSV();
    }, [selectedSpeed]);

    useEffect(() => {
        const initFaceLandmarker = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
            );
            faceLandmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task',
                    delegate: 'GPU',
                },
                runningMode: 'VIDEO',
                numFaces: 1,
            });
            setIsModelLoaded(true);
        };
        initFaceLandmarker();
    }, []);

    useEffect(() => {
        let stream = null;
        let animationId = null;
        let isActive = true;

        const startCamera = async () => {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                console.error("Camera API not available.");
                setIsCameraEnabled(false);
                return;
            }

            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ 
                    video: { width: { ideal: 640 }, height: { ideal: 480 } } 
                });
                
                if (!isActive) {
                    mediaStream.getTracks().forEach(track => track.stop());
                    return;
                }
                
                stream = mediaStream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadeddata = () => {
                        if (isActive && videoRef.current) {
                            videoRef.current.play().catch(e => console.error("Video play error:", e));
                            processVideo();
                        }
                    };
                }
            } catch (err) {
                console.error('Error accessing camera:', err);
                setIsCameraEnabled(false);
            }
        };

        const processVideo = () => {
            if (!isActive) return;

            if (videoRef.current && faceLandmarkerRef.current && simDataRef.current.isCameraEnabled) {
                if (videoRef.current.readyState >= 2) {
                    try {
                        const results = faceLandmarkerRef.current.detectForVideo(videoRef.current, performance.now());
                        if (results.faceLandmarks?.length > 0) {
                            const landmarks = results.faceLandmarks[0];
                            const leftEye = landmarks[33]; 
                            const rightEye = landmarks[263];
                            
                            if (leftEye && rightEye) {
                                // Logic for NON-mirrored camera:
                                // LeftEye (33) is on the left side of screen
                                // RightEye (263) is on the right side of screen
                                const dx = rightEye.x - leftEye.x;
                                const dy = rightEye.y - leftEye.y;
                                
                                // Standard rotation: Physical left-lean = positive roll
                                const roll = Math.atan2(dy, dx);
                                setCurrentHeadRoll(roll);

                                if (isPlayingRef.current) {
                                    const currentAy = simDataRef.current.currentAy;
                                    const currentTargetRad = Math.atan(currentAy / GRAVITY);

                                    setBioHistory(prev => {
                                        const next = [...prev, { roll, time: playbackTimeRef.current, targetRad: currentTargetRad }];
                                        return next.slice(-1000);
                                    });
                                }
                            }
                        }
                    } catch (err) {
                        console.error('FaceLandmarker detection error:', err);
                    }
                }
            }
            
            if (simDataRef.current.isCameraEnabled) {
                animationId = requestAnimationFrame(processVideo);
            }
        };

        if (isCameraEnabled && isModelLoaded) {
            startCamera();
        } else {
            if (stream) stream.getTracks().forEach(track => track.stop());
            if (animationId) cancelAnimationFrame(animationId);
        }

        return () => {
            isActive = false;
            if (stream) stream.getTracks().forEach(track => track.stop());
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, [isCameraEnabled, isModelLoaded]);

    useEffect(() => {
        let animationId;
        let lastTime = performance.now();

        const tick = () => {
            if (isPlayingRef.current && csvDataRef.current.length > 0) {
                const now = performance.now();
                const delta = (now - lastTime) / 1000;
                lastTime = now;

                playbackTimeRef.current += delta;
                const currentTime = playbackTimeRef.current;
                setPlaybackTimeState(currentTime);

                const data = csvDataRef.current;
                let index = playbackIndexRef.current;
                while (index < data.length - 1 && data[index].timestamp < currentTime) index++;

                if (index >= data.length - 1) {
                    setIsPlaying(false);
                    isPlayingRef.current = false;
                } else {
                    playbackIndexRef.current = index;
                    applyDataPoint(data[index], currentTime);
                }
            } else {
                lastTime = performance.now();
            }
            animationId = requestAnimationFrame(tick);
        };

        animationId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animationId);
    }, [selectedSpeed]);

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return undefined;

        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0f1d);

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 1.4, 2.8);
        camera.lookAt(0, 0.9, -4);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentMount.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({ color: 0x070a14, roughness: 0.9 })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.1;
        scene.add(floor);

        const roadMarkers = [];
        const markerMat = new THREE.MeshBasicMaterial({ color: 0x334155 });
        for (let i = 0; i < 15; i++) {
            const marker = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.02, 1.5), markerMat);
            scene.add(marker);
            roadMarkers.push({ mesh: marker, zOffset: (i / 15) * -40 });
        }

        const passengerGroup = new THREE.Group();
        passengerGroup.position.set(0, 0.1, 0.5);
        scene.add(passengerGroup);

        const seatMat = new THREE.MeshStandardMaterial({ color: 0x111827 });
        const seat = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.8, 0.15), seatMat);
        seat.position.set(0, 0.4, -0.1);
        passengerGroup.add(seat);
        const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.25, 0.6, 32), new THREE.MeshStandardMaterial({ color: 0x1f2937 }));
        torso.position.y = 0.3;
        passengerGroup.add(torso);

        const headGroup = new THREE.Group();
        headGroup.position.set(0, 0.65, 0);
        passengerGroup.add(headGroup);
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 32, 32), new THREE.MeshStandardMaterial({ color: 0xd1d5db }));
        head.position.y = 0.12;
        headGroup.add(head);
        const visor = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.05), new THREE.MeshStandardMaterial({ color: 0x030712 }));
        visor.position.set(0, 0.13, -0.13);
        headGroup.add(visor);

        const origin = new THREE.Vector3(0, 0.82, 0.1);
        const arrowGravity = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), origin, GRAVITY * SCALE_FACTOR * 0.04, 0xef4444, 0.1, 0.03);
        const arrowLateral = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, 0.1, 0x3b82f6, 0.1, 0.03);
        const arrowResultant = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), origin, 0.1, 0x10b981, 0.1, 0.03);
        scene.add(arrowGravity, arrowLateral, arrowResultant);

        const targetLine = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -0.6, 0), new THREE.Vector3(0, 1.0, 0)]),
            new THREE.LineDashedMaterial({ color: 0x64748b, dashSize: 0.06, gapSize: 0.04, depthTest: false })
        );
        targetLine.computeLineDistances();
        targetLine.position.copy(origin);
        targetLine.renderOrder = 999;
        scene.add(targetLine);

        let animationFrameId;
        let speedTimer = 0;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            speedTimer += 0.15;

            const { aLat: activeALat, direction: activeDir, currentAy: ay, isCameraEnabled: camOn, currentHeadRoll: roll } = simDataRef.current;
            const dirModifier = activeDir === 'left' ? 1 : -1;

            arrowLateral.setLength(Math.max(0.01, activeALat * SCALE_FACTOR * 0.04), 0.06, 0.02);
            arrowLateral.setDirection(new THREE.Vector3(dirModifier, 0, 0));
            const resultantDir = new THREE.Vector3(ay * 0.04 * dirModifier, -GRAVITY * 0.04, 0).normalize();
            arrowResultant.setDirection(resultantDir);
            arrowResultant.setLength(
                Math.sqrt(Math.pow(ay * 0.04, 2) + Math.pow(GRAVITY * 0.04, 2)) * SCALE_FACTOR,
                0.08,
                0.03
            );
            targetLine.rotation.z = Math.atan(ay / GRAVITY);

            // Synchronize 3D group rotation with standard math (CCW rotation)
            const targetRoll = camOn ? roll : Math.atan(ay / GRAVITY);
            headGroup.rotation.z = targetRoll;

            const curveIntensity = activeALat * 0.08 * -dirModifier;
            roadMarkers.forEach((m) => {
                let currentZ = ((m.zOffset - speedTimer) % 40);
                if (currentZ > 0) currentZ -= 40;
                const relZ = currentZ - camera.position.z;
                m.mesh.position.set(curveIntensity * Math.pow(relZ * 0.15, 2), -0.05, currentZ);
                m.mesh.rotation.y = Math.atan2(curveIntensity * 2 * relZ * 0.15, 1);
            });

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const w = currentMount.clientWidth;
            const h = currentMount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    const togglePlayback = () => {
        if (!isPlaying && csvData.length > 0 && playbackTimeRef.current >= csvData[csvData.length - 1].timestamp - 0.05) {
            resetPlayback();
        }
        const nextPlaying = !isPlaying;
        setIsPlaying(nextPlaying);
        isPlayingRef.current = nextPlaying;
    };

    const targetRad = Math.atan(currentAy / GRAVITY);
    const currentTheta = Math.abs(targetRad) * (180 / Math.PI);
    const totalDuration = csvData.length > 0 ? csvData[csvData.length - 1].timestamp : 0;

    const coachingStatus = (() => {
        if (!isCameraEnabled) return { label: 'Enable head tracking', sub: 'to receive tilt coaching', tone: 'slate' };
        if (csvData.length === 0) return { label: 'Loading route data…', sub: '', tone: 'slate' };
        const diff = getShortestDiff(targetRad, currentHeadRoll);
        const errDeg = Math.abs(diff) * (180 / Math.PI);
        if (errDeg < ALIGNMENT_THRESHOLD) return { label: 'Perfect alignment', sub: 'Matching GIV axis', tone: 'emerald' };
        return {
            label: diff > 0 ? 'Tilt head left' : 'Tilt head right',
            sub: `${errDeg.toFixed(0)}° to target · ${direction === 'left' ? '↖' : '↗'} turn`,
            tone: 'amber',
        };
    })();

    return (
        <div className="w-full max-w-[1600px] mx-auto p-3 bg-[#070b14] text-slate-100 h-screen flex flex-col overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 flex-1 min-h-0 overflow-hidden">

                {/* Left — speed, playback, telemetry */}
                <div className="lg:col-span-1 space-y-3 flex flex-col overflow-hidden min-h-0">
                    <div className="p-4 bg-[#0f172a] rounded-xl border border-slate-800/80 space-y-3 shrink-0">
                        <div className="flex items-center space-x-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                            <span>🚀</span> <span>Mission Control</span>
                        </div>

                        <div>
                            <label className="text-[9px] text-slate-500 uppercase font-bold mb-1.5 block">Vehicle speed</label>
                            <div className="grid grid-cols-3 gap-1.5">
                                {Object.keys(SPEED_CONFIG).map(s => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSpeed(s)}
                                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                                            selectedSpeed === s
                                                ? 'bg-blue-600 text-white border border-blue-500'
                                                : 'bg-slate-800/40 text-slate-400 hover:bg-slate-800 border border-transparent'
                                        }`}
                                    >
                                        {s} km/h
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={togglePlayback}
                            disabled={csvData.length === 0}
                            className={`w-full py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-40 ${
                                isPlaying ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30'
                            }`}
                        >
                            {isPlaying ? '⏸ Pause simulation' : '▶ Start simulation'}
                        </button>

                        <button
                            onClick={() => setIsCameraEnabled(!isCameraEnabled)}
                            disabled={!isModelLoaded}
                            className={`w-full py-2 rounded-lg text-[10px] font-bold transition-all ${
                                isCameraEnabled
                                    ? 'bg-rose-600/20 border border-rose-500/40 text-rose-400'
                                    : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:bg-slate-800'
                            } ${!isModelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isCameraEnabled ? '🛑 Disable head tracking' : '📷 Enable head tracking'}
                            {!isModelLoaded && ' ⏳'}
                        </button>
                    </div>

                    <div className="p-4 bg-black/40 rounded-xl border border-slate-800/50 shrink-0">
                        <p className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mb-2">Live telemetry (from CSV)</p>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div>
                                <p className="text-slate-500 uppercase text-[8px]">Lateral accel</p>
                                <p className="font-mono text-blue-400 font-bold">{aLat.toFixed(2)} <span className="text-[9px]">m/s²</span></p>
                            </div>
                            <div>
                                <p className="text-slate-500 uppercase text-[8px]">Tilt direction</p>
                                <p className={`font-bold uppercase ${direction === 'left' ? 'text-blue-400' : 'text-amber-400'}`}>
                                    {direction === 'left' ? '← Left' : 'Right →'}
                                </p>
                            </div>
                            <div>
                                <p className="text-slate-500 uppercase text-[8px]">Target GIV</p>
                                <p className="font-mono text-emerald-400 font-bold">{currentTheta.toFixed(1)}°</p>
                            </div>
                            <div>
                                <p className="text-slate-500 uppercase text-[8px]">Predicted (+1s)</p>
                                <p className="font-mono text-emerald-300/80 font-bold">{Math.abs(predictedTheta).toFixed(1)}° {predictedTheta >= 0 ? 'L' : 'R'}</p>
                            </div>
                        </div>
                        <p className="text-[9px] text-slate-600 font-mono mt-2">
                            {playbackTimeState.toFixed(1)}s / {totalDuration.toFixed(1)}s
                        </p>
                    </div>

                    <div className={`p-4 rounded-xl border flex-1 flex flex-col items-center justify-center text-center min-h-[100px] ${
                        coachingStatus.tone === 'emerald' ? 'bg-emerald-950/40 border-emerald-800/50' :
                        coachingStatus.tone === 'amber' ? 'bg-amber-950/30 border-amber-800/40' :
                        'bg-black/40 border-slate-800/50'
                    }`}>
                        <p className={`text-sm font-bold uppercase tracking-wide ${
                            coachingStatus.tone === 'emerald' ? 'text-emerald-400' :
                            coachingStatus.tone === 'amber' ? 'text-amber-400' : 'text-slate-500'
                        }`}>
                            {coachingStatus.label}
                        </p>
                        {coachingStatus.sub && <p className="text-[11px] text-slate-500 mt-1">{coachingStatus.sub}</p>}
                    </div>
                </div>

                {/* Center — route, 3D, chart */}
                <div className="lg:col-span-2 flex flex-col gap-3 min-h-0 overflow-hidden">
                    <div className="grid grid-cols-1 gap-3 h-32 shrink-0">
                        <div className="bg-[#0f172a] rounded-xl border border-slate-800 p-2 relative overflow-hidden flex flex-col">
                            <p className="text-[8px] font-bold text-slate-500 uppercase z-10">Test route</p>
                            <img
                                src={TRAJECTORY_IMAGE}
                                alt="Vehicle trajectory path used for lateral acceleration data"
                                className="flex-1 w-full object-contain rounded-lg opacity-90 min-h-0"
                            />
                        </div>
                    </div>

                    <div className="bg-[#0f172a] rounded-xl border border-slate-800 p-2 flex-1 relative min-h-[200px] overflow-hidden">
                        <div ref={mountRef} className="w-full h-full absolute inset-0" />
                        <div className="absolute top-2 left-2 flex flex-col gap-1 pointer-events-none">
                            <span className="bg-black/50 backdrop-blur px-2 py-0.5 rounded text-[8px] text-white/70 uppercase">3D GIV twin</span>
                            <span className="bg-blue-600/80 px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase">
                                {direction} · {selectedSpeed} km/h
                            </span>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <AngleChart csvData={csvData} bioHistory={bioHistory} playbackTime={playbackTimeState} height={100} />
                    </div>
                </div>

                {/* Right — biometric coaching */}
                <div className="lg:col-span-1 flex flex-col min-h-0 overflow-hidden">
                    <div className="p-4 bg-[#0f172a] rounded-xl border border-slate-800/80 flex-1 flex flex-col min-h-0 overflow-hidden">
                        <div className="flex items-center justify-between mb-2 shrink-0">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Biometric feed</span>
                            {isCameraEnabled && <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />}
                        </div>

                        {isCameraEnabled ? (
                            <div className="flex flex-col gap-3 flex-1 min-h-0 overflow-hidden">
                                <div className="rounded-lg overflow-hidden border border-slate-800 bg-black aspect-[3/4] relative shrink-0 max-h-[55vh]">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        playsInline
                                        muted
                                        // Removed transform: scaleX(-1) to stop mirroring
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <svg className="w-full h-full" viewBox="0 0 100 100">
                                            <line x1="50" y1="20" x2="50" y2="80" stroke="#ffffff" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.25" />

                                            {/* Standard rotation: Positive Math.atan2 roll maps directly to visual left-leaning */}
                                            <g style={{ transform: `rotate(${predictedTheta * (Math.PI / 180)}rad)`, transformOrigin: '50% 50%' }}>
                                                <line x1="50" y1="15" x2="50" y2="85" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.35" />
                                                <text x="50" y="8" fill="#10b981" fontSize="3" textAnchor="middle" opacity="0.5">+1s</text>
                                            </g>

                                            <g style={{ transform: `rotate(${targetRad}rad)`, transformOrigin: '50% 50%' }}>
                                                <line x1="50" y1="15" x2="50" y2="85" stroke="#10b981" strokeWidth="2" />
                                                <text x="50" y="12" fill="#10b981" fontSize="4" fontWeight="bold" textAnchor="middle">TARGET</text>
                                            </g>

                                            <g style={{ transform: `rotate(${currentHeadRoll}rad)`, transformOrigin: '50% 50%' }}>
                                                <line x1="50" y1="15" x2="50" y2="85" stroke="#3b82f6" strokeWidth="2" />
                                                <circle cx="50" cy="50" r="2" fill="#3b82f6" />
                                            </g>

                                            {(() => {
                                                const diff = getShortestDiff(targetRad, currentHeadRoll);
                                                if (Math.abs(diff) < ALIGNMENT_THRESHOLD * (Math.PI / 180)) {
                                                    return (
                                                        <text x="50" y="92" fill="#10b981" fontSize="5" fontWeight="bold" textAnchor="middle">✓ ALIGNED</text>
                                                    );
                                                }
                                                return (
                                                    <text x="50" y="92" fill={diff > 0 ? '#3b82f6' : '#fb7185'} fontSize="5" fontWeight="bold" textAnchor="middle">
                                                        {diff > 0 ? '← TILT LEFT' : 'TILT RIGHT →'}
                                                    </text>
                                                );
                                            })()}
                                        </svg>
                                    </div>

                                    <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[9px] font-mono font-bold">
                                        <span className="text-blue-400 bg-black/70 px-1.5 py-0.5 rounded">
                                            ACT {Math.abs(currentHeadRoll * 180 / Math.PI).toFixed(0)}° {currentHeadRoll >= 0 ? 'L' : 'R'}
                                        </span>
                                        <span className="text-emerald-400 bg-black/70 px-1.5 py-0.5 rounded">
                                            TGT {Math.abs(currentTheta).toFixed(0)}° {direction === 'left' ? 'L' : 'R'}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 shrink-0">
                                    <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Alignment error</p>
                                    {(() => {
                                        const errDeg = Math.abs(getShortestDiff(currentHeadRoll, targetRad)) * (180 / Math.PI);
                                        const score = Math.max(0, 100 - errDeg * 2);
                                        return (
                                            <>
                                                <p className={`text-2xl font-mono font-bold ${errDeg < ALIGNMENT_THRESHOLD ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                    {errDeg.toFixed(1)}°
                                                </p>
                                                <div className="mt-2 w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                                    <div className={`${errDeg < ALIGNMENT_THRESHOLD ? 'bg-emerald-500' : 'bg-rose-500'} h-full transition-all`} style={{ width: `${score}%` }} />
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 border border-dashed border-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4">
                                <p className="text-2xl opacity-20 mb-2">📷</p>
                                <p className="text-[10px] text-slate-500 font-medium">Camera inactive</p>
                                <p className="text-[9px] text-slate-600 mt-1">Enable head tracking for CSV-guided tilt coaching</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}