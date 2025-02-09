'use client'
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false,
});

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Three.js w Next.js</h1>
      <ThreeScene />
    </div>
  );
};

export default HomePage;