import Header from "$/components/UI/Text/Header";
import { motion } from "framer-motion";

const GHover = () => {
	return (
		<div>
			<Header
				className="text-center text-[#389B48]"
				title="Hover"
			/>

			<div className=" flex items-center justify-center mt-6">
				<motion.button
					whileHover={{
						scale: 1.2,
						borderRadius: "20px",
					}}
					whileTap={{
						scale: 1,
					}}
					transition={{
						ease: "easeInOut",
						duration: 0.5,
					}}
					className=" min-w-60 px-20 py-4 text-white bg-green-400  flex justify-center rounded-md"
				>
					Hover on me 😌
				</motion.button>
			</div>
		</div>
	);
};

export default GHover;

