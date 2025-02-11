'use client'
import ThreeScene from "./components/ThreeScene";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        position: 'relative', 
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}
    >      

      <section style={{ width: '40%', zIndex: 30 }}>
        <ThreeScene />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: 'black',
          width: '60%',
          height: '100vh',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontSize: '48px',
          zIndex: 30,
        }}
      >
        <motion.p className="text-lg" whileTap={{ scale: 0.95 }}>
          Contact
        </motion.p>
        <motion.p className="text-lg" whileTap={{ scale: 0.95 }}>
          <Link href={'/portfolio'}>Portfolio</Link>
        </motion.p>
      </motion.div>
    </main>
  );
}