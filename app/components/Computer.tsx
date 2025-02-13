"use client"
import Link from "next/link";

const Computer: React.FC = () => {
    return (
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
    )
}

export default Computer;