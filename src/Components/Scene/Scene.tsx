import { Canvas } from '@react-three/fiber'
import { MeshBasicMaterial } from 'three';

function Scene() {
    
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial wireframe={true} />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Scene;