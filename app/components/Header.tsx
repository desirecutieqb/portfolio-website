import Link from "next/link";
import {motion} from "framer-motion";
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
const Header: React.FC = () => {
    return (
        <>
            <motion.div variants={itemVariants}>
                <Link
                    href="/"
                    className="text-5xl mb-7 text-white text-center hover:text-blue-500 transition-colors z-30"
                >
                    Mykyta Tarakanov
                </Link>
            </motion.div>
        </>
    )
}

export default Header