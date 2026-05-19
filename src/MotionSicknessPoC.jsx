import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const GRAVITY = 9.81;
const SCALE_FACTOR = 1.8;

export default function MotionSicknessPoC() {
    const [aLat, setALat] = useState(2.8);
    const [direction, setDirection] = useState('left');
    const [behavior, setBehavior] = useState('active');

    const mountRef = useRef(null);
    const simDataRef = useRef({ aLat, direction, behavior });

    useEffect(() => {
        simDataRef.current = { aLat, direction, behavior };
    }, [aLat, direction, behavior]);

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
        <div className="w-full max-w-6xl p-6 bg-[#090d16] text-slate-100 rounded-xl border border-slate-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Controls Panel */}
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
                    </div>

                    {/* Bottom Coaching Display */}
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

                {/* Right Viewport Panel */}
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
                    
                    {/* Viewport container with built-in HUD / Cabin windshield overlay */}
                    <div className="w-full flex-1 rounded-lg overflow-hidden border border-slate-800/50 min-h-[400px] relative">
                        {/* 3D Canvas Mount Point */}
                        <div ref={mountRef} className="w-full h-full absolute inset-0 z-0" />

                        {/* Interactive Cockpit HUD Overlay (Simulating Windshield Window Frame) */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-10 border-[16px] border-black/40">
                            {/* Windshield Top Header Roof Lining */}
                            <div className="w-full bg-gradient-to-b from-[#0b0f19] to-transparent pt-3 pb-8 px-4 flex justify-between items-start">
                                <span className="text-[10px] bg-slate-900/90 border border-slate-700/50 px-2 py-0.5 rounded text-slate-400 backdrop-blur-sm font-medium">
                                    🚘 Rear-Passenger Cockpit Perspective
                                </span>
                                <span className="text-[10px] font-mono bg-slate-950/80 px-2 py-0.5 rounded text-blue-400">
                                    Road: {direction === 'left' ? 'Curve Left' : 'Curve Right'}
                                </span>
                            </div>

                            {/* Bottom dashboard silhouette shelf */}
                            <div className="w-full h-14 bg-gradient-to-t from-[#020617] via-[#090d16] to-transparent opacity-95 flex items-center justify-center border-t border-slate-900/50">
                                <div className="text-[10px] tracking-wide text-slate-500 font-medium font-mono uppercase">
                                    Forward-Looking Roadway ({direction === 'left' ? 'Turn Left' : 'Turn Right'})
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}