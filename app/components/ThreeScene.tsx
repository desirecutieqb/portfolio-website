'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
interface GLTFResult {
  scene: THREE.Group;
  scenes: THREE.Group[];
  animations: THREE.AnimationClip[];
  asset: {
    version?: string;
    generator?: string;
  };
  userData?: unknown;
}

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      scene.background = null;

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const modelGroup = new THREE.Group();
      scene.add(modelGroup);
      modelGroupRef.current = modelGroup;

      const loader = new GLTFLoader();
      loader.load(
        '/models/gltf/computer/scene.gltf', 
        (gltf: GLTFResult) => {
          const loadedModel = gltf.scene;
          loadedModel.position.set(0, -1, 0);
          loadedModel.scale.set(1, 1, 1);
          modelGroup.add(loadedModel);
        },
        undefined,
        (error: unknown) => {
          console.error('Wystąpił błąd podczas ładowania modelu:', error);
        }
      );

      camera.position.z = 7;

      const animate = () => {
        requestAnimationFrame(animate);

        if (modelGroupRef.current) {
          modelGroupRef.current.rotation.y += 0.005;
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (container && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    }
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '50%', background: 'transparent' }} />;
};

export default ThreeScene;