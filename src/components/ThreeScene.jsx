import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function ThreeScene() {
  return (
    <Canvas className="h-[600px]">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      <motion.group
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: Math.PI * 2,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#4f46e5"
            attach="material"
            distort={0.5}
            speed={2}
            wireframe
          />
        </Sphere>
      </motion.group>
      <EffectComposer>
        <Bloom luminanceThreshold={0.5} intensity={1} />
      </EffectComposer>
    </Canvas>
  );
}