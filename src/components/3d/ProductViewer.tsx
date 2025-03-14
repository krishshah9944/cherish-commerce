
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls, Stage } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

// Simple 3D model component
const Model = ({ modelPath, color = '#ffffff' }) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Create simple geometry for products without 3D models
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      const material = meshRef.current.material as MeshStandardMaterial;
      if (material) {
        material.color.set(hovered ? '#ff9900' : color);
      }
    }
  }, [hovered, color]);

  return (
    <mesh
      ref={meshRef}
      scale={1.5}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Product viewer component
const ProductViewer = ({ category, color = '#ffffff' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-secondary/50">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
          >
            <Stage environment="city" intensity={0.6}>
              <Model modelPath="" color={color} />
            </Stage>
          </PresentationControls>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-white/80 text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
        3D View
      </div>
    </div>
  );
};

export default ProductViewer;
