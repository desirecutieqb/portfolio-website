'use client'
import ThreeScene from "./components/ThreeScene";

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div style={{ width: '40%' }}>
        <ThreeScene />
      </div>
      <div style={{ backgroundColor: 'black', width: '60%', height: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 className="text-4xl font-bold mb-4">Mykyta Tarakanov</h1>
        <p className="text-lg">
          Contact
        </p>
        <p className="text-lg">
          Portfolio
        </p>
      </div>
    </div>
  );
}