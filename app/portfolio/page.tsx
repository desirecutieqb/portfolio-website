'use client'
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioPage: React.FC = () => {
  return (
    <main className="mt-28 flex flex-col items-center justify-center">
      <motion.h1 className="text-3xl font-bold mb-6">My recent projects</motion.h1>
      <section className="flex flex-row flex-nowrap justify-center min-w-[1024px] gap-8">
        <div className="flex flex-col items-center w-[500px]">
          <Image width={500} height={300} className="w-[500px]" src="/quiz_app.png" alt="Quiz App" />
          <p className="w-[500px] text-sm text-gray-300 mt-2 text-justify">
            Built a quiz application using Next.js and TypeScript, 
            with authentication handled by Clerk. Utilized MongoDB and Prisma for efficient data management. 
            Users can participate in quizzes and view a leaderboard, but quiz creation is restricted. 
            The app ensures a seamless and secure user experience.
          </p>
        </div>
        
        <div className="flex flex-col items-center w-[500px]">
          <Image width={500} height={500} className="w-[500px]" src="/foodies.png" alt="Foodies App" />
          <p className="w-[500px] text-sm text-gray-300 mt-2 text-justify">
          I developed Foodies, a culinary-themed web application built with Next.js 13 using the new App Router architecture. 
          The project leverages server and client components for efficient data fetching and rendering, 
          providing a fast, modern user experience. 
          I used better-sqlite3 for the database layer to store and manage application data.
          </p>
        </div> 
      </section>
    </main>
  );
};

export default PortfolioPage;