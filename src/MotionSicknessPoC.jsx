import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const GRAVITY = 9.81;
const SCALE_FACTOR = 1.8;

export default function MotionSicknessPoC() {
    const [aLat, setALat] = useState(2.8);
    const [direction, setDirection] = useState('left');
    const [behavior, setBehavior] = useState('active');
    
    // Head tracking states
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);
    const [currentHeadRoll, setCurrentHeadRoll] = useState(0);
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    const mountRef = useRef(null);
    const videoRef = useRef(null);
    const faceLandmarkerRef = useRef(null);
    const simDataRef = useRef({ aLat, direction, behavior });

    useEffect(() => {
        simDataRef.current = { aLat, direction, behavior };
    }, [aLat, direction, behavior]);

    // Initialize MediaPipe Face Landmarker
    useEffect(() => {
        const initFaceLandmarker = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
            );
            faceLandmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                    delegate: "GPU"
                },
                outputFaceBlendshapes: true,
                runningMode: "VIDEO",
                numFaces: 1
            });
            setIsModelLoaded(true);
        };
        initFaceLandmarker();
    }, []);

    // Camera setup and frame processing
    useEffect(() => {
        let stream = null;
        let animationId = null;

        const startCamera = async () => {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadedmetadata = () => {
                        videoRef.current.play();
                        processVideo();
                    };
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                setIsCameraEnabled(false);
            }
        };

        const processVideo = () => {
            if (videoRef.current && faceLandmarkerRef.current && isCameraEnabled) {
                const startTimeMs = performance.now();
                const results = faceLandmarkerRef.current.detectForVideo(videoRef.current, startTimeMs);

                if (results.faceLandmarks && results.faceLandmarks.length > 0) {
                    const landmarks = results.faceLandmarks[0];
                    // Landmark indices: 33 (left eye outer), 263 (right eye outer)
                    // Or 130 (left eye inner), 359 (right eye inner)
                    const leftEye = landmarks[33];
                    const rightEye = landmarks[263];

                    // Calculate roll angle in radians
                    // Landmark 33 (Subject's Left Eye Outer), Landmark 263 (Subject's Right Eye Outer)
                    // In a standard camera feed (not mirrored by browser yet), 
                    // Subject's Right Eye (263) is on the RIGHT of the frame (higher X)
                    // Subject's Left Eye (33) is on the LEFT of the frame (lower X)
                    const dx = landmarks[263].x - landmarks[33].x;
                    const dy = landmarks[33].y - landmarks[263].y;
                    
                    // atan2(dy, dx) where dx is positive for level head
                    // For right tilt (subject's right), Right Eye (263) is lower (larger y)
                    // Left Eye (33) is higher (smaller y). dy = 33.y - 263.y is negative.
                    // We want left tilt to be positive to match the mirrored video and 3D scene
                    const roll = Math.atan2(dy, dx); 
                    setCurrentHeadRoll(roll);
                }
            }
            if (isCameraEnabled) {
                animationId = requestAnimationFrame(processVideo);
            }
        };

        if (isCameraEnabled && isModelLoaded) {
            startCamera();
        } else {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        }

        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [isCameraEnabled, isModelLoaded]);

    useEffect(() => {
        const currentMount = mountRef.current;
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0f1d); // Deep cockpit night sky environment

        // Camera setup matching an over-the-shoulder perspective
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 1.4, 2.8);
        camera.lookAt(0, 0.9, -4);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentMount.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        // Ground/Horizon plane
        const floorGeo = new THREE.PlaneGeometry(100, 100);
        const floorMat = new THREE.MeshStandardMaterial({ color: 0x070a14, roughness: 0.9 });
        const floor = new THREE.Mesh(floorGeo, floorMat);
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -0.1;
        scene.add(floor);

        // --- DYNAMIC TUNNEL / ROAD LINES ---
        // Generates lane markers that animate to simulate forward movement and curve with steering forces
        const roadMarkersCount = 15;
        const roadMarkers = [];
        const markerGeo = new THREE.BoxGeometry(0.1, 0.02, 1.5);
        const markerMat = new THREE.MeshBasicMaterial({ color: 0x475569 });

        for (let i = 0; i < roadMarkersCount; i++) {
            const marker = new THREE.Mesh(markerGeo, markerMat);
            scene.add(marker);
            roadMarkers.push({
                mesh: marker,
                zOffset: (i / roadMarkersCount) * -40 // Distribute down the horizon track
            });
        }

        // --- HUMAN-STYLED PASSENGER GROUP ---
        const passengerGroup = new THREE.Group();
        passengerGroup.position.set(0, 0.1, 0.5); // Positioned inside the cabin space
        scene.add(passengerGroup);

        // Seat Backrest
        const seatGeo = new THREE.BoxGeometry(0.6, 0.8, 0.15);
        const seatMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.7 });
        const seat = new THREE.Mesh(seatGeo, seatMat);
        seat.position.set(0, 0.4, -0.1);
        passengerGroup.add(seat);

        // Headrest
        const headrestGeo = new THREE.BoxGeometry(0.3, 0.2, 0.12);
        const headrest = new THREE.Mesh(headrestGeo, seatMat);
        headrest.position.set(0, 0.82, -0.1);
        passengerGroup.add(headrest);

        // Passenger Torso (Shoulders)
        const torsoGeo = new THREE.CylinderGeometry(0.18, 0.25, 0.6, 32);
        const torsoMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.6 }); // Jacket style
        const torso = new THREE.Mesh(torsoGeo, torsoMat);
        torso.position.y = 0.3;
        passengerGroup.add(torso);

        // Head Pivot Group for Neck Rolling
        const headGroup = new THREE.Group();
        headGroup.position.set(0, 0.65, 0);
        passengerGroup.add(headGroup);

        // Passenger Head
        const headGeo = new THREE.SphereGeometry(0.15, 32, 32);
        const headMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.6 });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.y = 0.12;
        headGroup.add(head);

        // Hair / Back of Head Texture Mockup
        const hairGeo = new THREE.SphereGeometry(0.152, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const hairMat = new THREE.MeshStandardMaterial({ color: 0x374151, roughness: 0.9 });
        const hair = new THREE.Mesh(hairGeo, hairMat);
        hair.position.y = 0.12;
        hair.rotation.x = Math.PI / 4; // Slanted towards back view
        headGroup.add(hair);

        // Visor/Glasses facing straight forward into the screen
        const visorGeo = new THREE.BoxGeometry(0.14, 0.05, 0.05);
        const visorMat = new THREE.MeshStandardMaterial({ color: 0x030712, roughness: 0.1 });
        const visor = new THREE.Mesh(visorGeo, visorMat);
        visor.position.set(0, 0.13, -0.13); 
        headGroup.add(visor);

        // --- HUD VECTOR ARROWS (OVERLAY FORCED) ---
        // Anchored directly in front of the passenger's field of view
        const origin = new THREE.Vector3(0, 0.82, 0.1);
        
        const arrowGravity = new THREE.ArrowHelper(
            new THREE.Vector3(0, -1, 0),
            origin,
            GRAVITY * SCALE_FACTOR * 0.04,
            0xef4444, 0.1, 0.03
        );
        scene.add(arrowGravity);

        const arrowLateral = new THREE.ArrowHelper(
            new THREE.Vector3(1, 0, 0),
            origin,
            0.1,
            0x3b82f6, 0.1, 0.03
        );
        scene.add(arrowLateral);

        const arrowResultant = new THREE.ArrowHelper(
            new THREE.Vector3(0, -1, 0),
            origin,
            0.1,
            0x10b981, 0.1, 0.03
        );
        scene.add(arrowResultant);

        // Dashed Target Axis Line
        const targetLineMat = new THREE.LineDashedMaterial({ 
            color: 0x64748b, 
            dashSize: 0.06, 
            gapSize: 0.04,
            depthTest: false 
        });
        const targetLineGeo = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(0, -0.6, 0),
            new THREE.Vector3(0, 1.0, 0)
        ]);
        const targetLine = new THREE.Line(targetLineGeo, targetLineMat);
        targetLine.computeLineDistances();
        targetLine.position.copy(origin);
        targetLine.renderOrder = 999;
        scene.add(targetLine);

        // Helper ensuring arrows stay layered cleanly over 3D depth buffers
        const configureHUDOverlay = (arrowObj) => {
            arrowObj.renderOrder = 999;
            arrowObj.traverse((child) => {
                if (child.isMesh || child.isLine) {
                    child.material.depthTest = false;
                    child.material.depthWrite = false;
                }
            });
        };

        configureHUDOverlay(arrowGravity);
        configureHUDOverlay(arrowLateral);
        configureHUDOverlay(arrowResultant);

        let animationFrameId;
        let speedTimer = 0;
        
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            speedTimer += 0.15; // Drives continuous forward motion speed

            const { aLat: currentALat, direction: currentDir, behavior: currentBehavior } = simDataRef.current;

            const thetaRad = Math.atan(currentALat / GRAVITY);
            const dirModifier = currentDir === 'left' ? 1 : -1;

            const latVectorX = currentALat * SCALE_FACTOR * 0.04 * dirModifier;
            const gravVectorY = -GRAVITY * SCALE_FACTOR * 0.04;

            // Update HUD Arrows
            arrowLateral.setLength(Math.max(0.01, Math.abs(latVectorX)), 0.06, 0.02);
            arrowLateral.setDirection(new THREE.Vector3(dirModifier, 0, 0));

            const resultantDir = new THREE.Vector3(latVectorX, gravVectorY, 0).normalize();
            const resultantLength = Math.sqrt(latVectorX * latVectorX + gravVectorY * gravVectorY);
            arrowResultant.setDirection(resultantDir);
            arrowResultant.setLength(resultantLength, 0.08, 0.03);

            targetLine.rotation.z = thetaRad * dirModifier;

            // Biomechanical Strategy Head Tilt Interp
            let targetHeadRoll = 0;
            if (currentBehavior === 'active') {
                targetHeadRoll = thetaRad * dirModifier; 
            } else {
                targetHeadRoll = -thetaRad * 0.4 * dirModifier; 
            }
            headGroup.rotation.z += (targetHeadRoll - headGroup.rotation.z) * 0.1;

            // --- ANIMATE MOVING AND CURVING ROAD LINES ---
            const curveIntensity = currentALat * 0.08 * -dirModifier; 
            roadMarkers.forEach((marker) => {
                // Calculate moving depth position
                let currentZ = ((marker.zOffset - speedTimer) % 40);
                if (currentZ > 0) currentZ -= 40;

                // Create bend curvature math matching turn severity
                const relativeZ = currentZ - camera.position.z;
                let curveX = curveIntensity * Math.pow(relativeZ * 0.15, 2);

                marker.mesh.position.set(curveX, -0.05, currentZ);
                marker.mesh.rotation.y = Math.atan2(curveIntensity * 2 * relativeZ * 0.15, 1);
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
            scene.clear();
        };
    }, []);

    const calculatedTheta = Math.atan(aLat / GRAVITY) * (180 / Math.PI);

    return (
        <div className="w-full max-w-[1600px] p-6 bg-[#090d16] text-slate-100 rounded-xl border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                
                {/* Left Controls Panel (Col 1) */}
                <div className="space-y-6 lg:col-span-1">
                    <div className="p-5 bg-[#0f172a] rounded-xl border border-slate-800/80 space-y-5">
                        <div className="flex items-center space-x-2 text-slate-400 text-sm font-semibold tracking-wide uppercase">
                            <span>⚙️</span> <span>Controls</span>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-slate-400 block">Turn Vector Orientation</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setDirection('left')}
                                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                                        direction === 'left' 
                                            ? 'bg-blue-600/20 border border-blue-500 text-blue-400' 
                                            : 'bg-slate-800/40 border border-transparent text-slate-400 hover:bg-slate-800'
                                    }`}
                                >
                                    ◀ Left Turn
                                </button>
                                <button
                                    onClick={() => setDirection('right')}
                                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                                        direction === 'right' 
                                            ? 'bg-blue-600/20 border border-blue-500 text-blue-400' 
                                            : 'bg-slate-800/40 border border-transparent text-slate-400 hover:bg-slate-800'
                                    }`}
                                >
                                    Right Turn ▶
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                                <label className="text-slate-400">Lateral Acceleration (a_lat)</label>
                                <span className="font-mono text-blue-400 font-bold">{aLat.toFixed(1)} m/s²</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="5"
                                step="0.1"
                                value={aLat}
                                onChange={(e) => setALat(parseFloat(e.target.value))}
                                className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-slate-400 block">Biomechanical Strategy</label>
                            <div className="space-y-2">
                                <label className="flex items-start p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 cursor-pointer hover:bg-slate-800/40 transition">
                                    <input
                                        type="radio"
                                        name="behavior"
                                        value="active"
                                        checked={behavior === 'active'}
                                        onChange={() => setBehavior('active')}
                                        className="accent-emerald-500 h-4 w-4 mt-0.5"
                                    />
                                    <div className="text-xs ml-3">
                                        <p className="font-semibold text-emerald-400">🛡️ Active Alignment</p>
                                        <p className="text-slate-500 text-[11px] mt-0.5">Rolls inward along GIV axis</p>
                                    </div>
                                </label>
                                <label className="flex items-start p-3 rounded-lg bg-slate-900/60 border border-slate-800/60 cursor-pointer hover:bg-slate-800/40 transition">
                                    <input
                                        type="radio"
                                        name="behavior"
                                        value="passive"
                                        checked={behavior === 'passive'}
                                        onChange={() => setBehavior('passive')}
                                        className="accent-rose-500 h-4 w-4 mt-0.5"
                                    />
                                    <div className="text-xs ml-3">
                                        <p className="font-semibold text-rose-400">🤢 Passive Passenger</p>
                                        <p className="text-slate-500 text-[11px] mt-0.5">Sways outward via inertial forces</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        
                        <div className="space-y-2 pt-4 border-t border-slate-800/50">
                            <label className="text-xs text-slate-400 block">System Integration</label>
                            <button
                                onClick={() => setIsCameraEnabled(!isCameraEnabled)}
                                disabled={!isModelLoaded}
                                className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                                    isCameraEnabled 
                                        ? 'bg-rose-600/20 border border-rose-500 text-rose-400' 
                                        : 'bg-emerald-600/20 border border-emerald-500 text-emerald-400 hover:bg-emerald-600/30'
                                } ${!isModelLoaded ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <span>{isCameraEnabled ? '🛑 Stop Camera' : '📷 Enable Head Tracking'}</span>
                                {!isModelLoaded && <span className="animate-spin text-xs">⏳</span>}
                            </button>
                        </div>
                    </div>

                    <div className="p-5 bg-black rounded-xl border border-slate-900 flex flex-col items-center justify-center min-h-[160px] text-center shadow-inner">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">
                            SIMULATED IN-CABIN COACHING DISPLAY
                        </span>
                        
                        {aLat === 0 ? (
                            <>
                                <div className="text-emerald-400 text-base font-bold tracking-wide uppercase">HEAD LEVEL</div>
                                <div className="text-2xl my-1 text-emerald-500">●</div>
                                <div className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full font-medium border border-emerald-500/20">System Nominal</div>
                            </>
                        ) : isCameraEnabled ? (
                            (() => {
                                const targetRad = Math.atan(aLat / GRAVITY) * (direction === 'left' ? 1 : -1);
                                const diff = Math.abs(currentHeadRoll - targetRad);
                                const isAligned = diff < 0.1; // ~5.7 degrees tolerance

                                return (
                                    <>
                                        <div className={`${isAligned ? 'text-emerald-400' : 'text-amber-400'} text-base font-bold tracking-wide uppercase`}>
                                            {isAligned ? 'PERFECT ALIGNMENT' : `TILT ${direction.toUpperCase()}`}
                                        </div>
                                        <div className={`text-2xl my-1 ${isAligned ? 'text-emerald-400' : 'text-amber-400 font-bold animate-bounce'}`}>
                                            {isAligned ? '✓' : direction === 'left' ? '↖' : '↗'}
                                        </div>
                                        <div className="text-xs text-slate-400 mb-2">
                                            {isAligned ? 'Matching GIV Axis' : `Need ${(diff * 180 / Math.PI).toFixed(0)}° more tilt`}
                                        </div>
                                        <div className={`text-xs px-3 py-0.5 ${isAligned ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'} rounded-full font-medium border`}>
                                            {isAligned ? 'Optimal Balance' : 'Adjusting...'}
                                        </div>
                                    </>
                                );
                            })()
                        ) : behavior === 'active' ? (
                            <>
                                <div className="text-emerald-400 text-base font-bold tracking-wide uppercase">TILT {direction.toUpperCase()}</div>
                                <div className="text-2xl my-1 text-emerald-400 font-bold">↖</div>
                                <div className="text-xs text-slate-400 mb-2">Optimal: {calculatedTheta.toFixed(1)}°</div>
                                <div className="text-xs px-3 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full font-medium border border-emerald-500/20">System Corrected</div>
                            </>
                        ) : (
                            <>
                                <div className="text-rose-500 text-base font-bold tracking-wide uppercase">VESTIBULAR MISMATCH</div>
                                <div className="text-2xl my-1 text-rose-500 animate-pulse">⚠</div>
                                <div className="text-xs text-slate-400 mb-2">Mismatch: {calculatedTheta.toFixed(1)}°</div>
                                <div className="text-xs px-3 py-0.5 bg-rose-500/10 text-rose-400 rounded-full font-medium border border-rose-500/20">High Risk</div>
                            </>
                        )}
                    </div>
                </div>

                {/* Center Viewport Panel (Col 2-3) */}
                <div className="lg:col-span-2 flex flex-col bg-[#0f172a] rounded-xl border border-slate-800 p-4 min-h-[480px]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 px-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center">
                            <span className="mr-2">🎥</span> REAL-TIME REAL-WORLD VECTOR TWIN
                        </span>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px]">
                            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-rose-500 mr-1.5" /> Gravity (9.81 m/s²)</span>
                            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5" /> Inertial a_lat</span>
                            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" /> Resultant GIV</span>
                        </div>
                    </div>
                    
                    <div className="w-full flex-1 rounded-lg overflow-hidden border border-slate-800/50 min-h-[400px] relative">
                        <div ref={mountRef} className="w-full h-full absolute inset-0 z-0" />
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-10 border-[16px] border-black/40">
                            <div className="w-full bg-gradient-to-b from-[#0b0f19] to-transparent pt-3 pb-8 px-4 flex justify-between items-start">
                                <span className="text-[10px] bg-slate-900/90 border border-slate-700/50 px-2 py-0.5 rounded text-slate-400 backdrop-blur-sm font-medium">
                                    🚘 Rear-Passenger Cockpit Perspective
                                </span>
                                <span className="text-[10px] font-mono bg-slate-950/80 px-2 py-0.5 rounded text-blue-400">
                                    Road: {direction === 'left' ? 'Curve Left' : 'Curve Right'}
                                </span>
                            </div>
                            <div className="w-full h-14 bg-gradient-to-t from-[#020617] via-[#090d16] to-transparent opacity-95 flex items-center justify-center border-t border-slate-900/50">
                                <div className="text-[10px] tracking-wide text-slate-500 font-medium font-mono uppercase">
                                    Forward-Looking Roadway ({direction === 'left' ? 'Turn Left' : 'Turn Right'})
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Biometric Sidebar (Col 4) */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="p-5 bg-[#0f172a] rounded-xl border border-slate-800/80 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2 text-slate-400 text-sm font-semibold tracking-wide uppercase">
                                <span>👤</span> <span>Biometric Feed</span>
                            </div>
                            {isCameraEnabled && <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />}
                        </div>

                        {isCameraEnabled ? (
                            <div className="flex-1 flex flex-col space-y-4">
                                <div className="rounded-xl overflow-hidden border-2 border-slate-800 bg-black aspect-[3/4] relative shadow-2xl">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        playsInline
                                        muted
                                        style={{ transform: 'scaleX(-1)' }}
                                    />
                                    
                                    {/* Advanced HUD Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        {/* Angle Arc visualization */}
                                        <svg className="w-full h-full absolute inset-0 opacity-60" viewBox="0 0 100 100">
                                            {/* Static Horizon */}
                                            <line x1="10" y1="50" x2="90" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
                                            {/* Target GIV Angle */}
                                            <g style={{ transform: `rotate(${Math.atan(aLat / GRAVITY) * (direction === 'left' ? 1 : -1)}rad)`, transformOrigin: '50% 50%' }}>
                                                <line x1="50" y1="10" x2="50" y2="90" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
                                                <circle cx="50" cy="15" r="2" fill="#10b981" />
                                            </g>
                                            {/* Current Head Angle */}
                                            <g style={{ transform: `rotate(${currentHeadRoll}rad)`, transformOrigin: '50% 50%' }}>
                                                <line x1="50" y1="10" x2="50" y2="90" stroke="#3b82f6" strokeWidth="2" />
                                                <rect x="48" y="10" width="4" height="4" fill="#3b82f6" />
                                            </g>
                                        </svg>
                                    </div>

                                    {/* Bottom labels */}
                                    <div className="absolute bottom-4 left-4 right-4 space-y-2">
                                        <div className="flex justify-between items-center bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase">Head Roll</span>
                                            <span className="text-xs font-mono text-blue-400">{(currentHeadRoll * 180 / Math.PI).toFixed(1)}°</span>
                                        </div>
                                        <div className="flex justify-between items-center bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/20">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase">GIV Target</span>
                                            <span className="text-xs font-mono text-emerald-400">{calculatedTheta.toFixed(1)}°</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                    <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Postural Analysis</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-slate-400">Alignment Error</span>
                                            <span className={`text-xs font-mono ${Math.abs(currentHeadRoll - (Math.atan(aLat / GRAVITY) * (direction === 'left' ? 1 : -1))) < 0.1 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                {(Math.abs(currentHeadRoll - (Math.atan(aLat / GRAVITY) * (direction === 'left' ? 1 : -1))) * 180 / Math.PI).toFixed(1)}°
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-blue-500 h-full transition-all duration-300"
                                                style={{ width: `${Math.min(100, Math.abs(currentHeadRoll) * 200)}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 border-2 border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center text-center p-6 space-y-4">
                                <div className="text-3xl opacity-20">📷</div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-500">Camera Feed Inactive</p>
                                    <p className="text-[11px] text-slate-600">Enable head tracking to see real-time biometric analysis</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}