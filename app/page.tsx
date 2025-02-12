"use client";
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
      <section style={{ width: '60%', zIndex: 30 }}>
        <ThreeScene />
        <p className="text-base text-gray-400 opacity-75 mt-4 mb-4 text-center">
          <Link
            href="https://skfb.ly/6ZPtS"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            My Computer
          </Link>{" "}
          by Tobalation is licensed under{" "}
          <Link
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Creative Commons Attribution
          </Link>.
        </p>
        <ThreeScene />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{

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
        <motion.p>
          Mykyta Tarakanov
        </motion.p>
        <motion.section className="flex gap-4 mb-4">
          <Link href={"https://github.com/desirecutieqb"} target="_blank" rel="noopener noreferrer">

            <svg role="img"
              viewBox="0 0 24 24"
              width={50}
              height={50}
              fill="currentColor"
              className="text-white hover:text-gray-300 transition-colors"
              xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
          </Link>
          <Link href={"https://www.linkedin.com/in/mykyta-tarakanov/"} target="_blank" rel="noopener noreferrer" className="z-50">

            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="px"
              height="50px"
              fill="currentColor"
              className="text-white hover:text-gray-300 transition-colors">

              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" /></svg>
          </Link>
        </motion.section>
        <motion.p className="text-lg" whileTap={{ scale: 0.95 }}>
          <Link href="/contact">Contact</Link>

        </motion.p>
        <motion.p className="text-lg" whileTap={{ scale: 0.95 }}>
          <Link href="/portfolio">Portfolio</Link>
        </motion.p>
      </motion.section>
    </main>
  );
}