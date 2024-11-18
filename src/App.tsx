import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Character3D from './components/Character3D';
import ChatBox from './components/ChatBox';
import MysticRunes from './components/MysticRunes';
import GlowingOrbs from './components/GlowingOrbs';
import BackgroundScene from './components/BackgroundScene';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      <BackgroundScene />
      <MysticRunes />
      <GlowingOrbs />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 relative z-10">
        <div className="w-full lg:w-1/2 h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-teal-900/20 rounded-lg backdrop-blur-sm" />
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.2} />
            <Character3D />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </div>
        
        <div className="w-full lg:w-1/2">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default App;