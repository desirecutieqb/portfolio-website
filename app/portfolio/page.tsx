"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const hoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
};

const PortfolioPage: React.FC = () => {
  return (
    <motion.main
      className="relative mt-15 flex flex-col items-center justify-center p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link
          href="/"
          className="text-5xl mb-7 text-center hover:text-blue-500 transition-colors z-30"
        >
          Mykyta Tarakanov
        </Link>
      </motion.div>

      <motion.h1 className="text-3xl text-center font-bold mb-6 z-30" variants={itemVariants}>
        My recent projects
      </motion.h1>

      <motion.section
        className="flex flex-col md:flex-row justify-center gap-8 z-20"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-col items-center w-full md:w-[500px]"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Link href="https://e-commerce-pet-git-testing-branch-desirecutieqbs-projects.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image
                width={500}
                height={300}
                src="/quiz_app.png"
                alt="Quiz App"
                className="rounded-lg shadow-lg"
              />
            </Link>
          </motion.div>
          <motion.p
            className="w-full text-sm text-white mt-2 text-justify"
            variants={itemVariants}
          >
            Built a quiz application using Next.js and TypeScript, with authentication
            handled by Clerk. Utilized MongoDB and Prisma for efficient data management.
            Users can participate in quizzes and view a leaderboard, but quiz creation is
            restricted. The app ensures a seamless and secure user experience.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2 mt-2"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center bg-gray-200 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Next.js</title>
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
              </svg>
              <span className="ml-1">Next.js</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-blue-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>TypeScript</title>
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
              <span className="ml-1">TypeScript</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Clerk</title>
                <path d="m21.47 20.829-2.881-2.881a.572.572 0 0 0-.7-.084 6.854 6.854 0 0 1-7.081 0 .576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69.57.57 0 0 0 .166.186 12 12 0 0 0 14.113 0 .58.58 0 0 0 .239-.423.576.576 0 0 0-.172-.453Zm.002-17.668-2.88 2.88a.569.569 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.862 6.862 0 0 0-1.222 3.692 6.86 6.86 0 0 0 .978 3.764.573.573 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405.566.566 0 0 1 .232.418.57.57 0 0 1-.168.448Zm-7.118 12.261a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854Z" />
              </svg>
              <span className="ml-1">Clerk</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-green-100 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>MongoDB</title>
                <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
              </svg>
              <span className="ml-0.5">MongoDB</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-white text-black text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Prisma</title>
                <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" />
              </svg>
              <span>Prisma</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.section
          className="flex flex-col items-center w-full md:w-[500px]"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Link href="https://desirecutieqb-github-io-2gh8-bien9r8un-desirecutieqbs-projects.vercel.app/meals" target="_blank" rel="noopener noreferrer">
              <Image
                width={500}
                height={500}
                src="/foodies.png"
                alt="Foodies App"
                className="rounded-lg shadow-lg"
              />
            </Link>
          </motion.div>
          <motion.p
            className="w-full text-sm text-white mt-2 text-justify"
            variants={itemVariants}
          >
            I developed Foodies, a culinary-themed web application built with Next.js 15 using the new App Router architecture.
            The project leverages server and client components for efficient data fetching and rendering,
            providing a fast, modern user experience.
            I used better-sqlite3 for the database layer to store and manage application data.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2 mt-2"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center bg-gray-200 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Next.js</title>
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
              </svg>
              <span className="ml-1">Next.js</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-gray-200 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>SQLite</title>
                <path d="M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z" />
              </svg>
              <span className="ml-1">Better-sqlite-3</span>
            </motion.div>
            <motion.div
              className="flex items-center bg-blue-200 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit cursor-pointer"
              variants={itemVariants}
              whileHover={hoverVariants.hover}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>React</title>
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565-.455-.47-.91-.993-1.36-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <span className="ml-1">React</span>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.section>

      <motion.h1 className="text-4xl mt-8 z-30" variants={itemVariants}>
        Go further, get more...
      </motion.h1>
    </motion.main>
  );
};

export default PortfolioPage;