import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Text/Header";

const ScaleCorrection = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Header
				className="text-center text-[#389B48]"
				title="Scale correction"
			/>

			<motion.div
				layout
				data-isOpen={isOpen}
				className={[
					" bg-white   mx-auto mt-6 cursor-pointer flex items-center justify-center ",
					isOpen
						? "h-60 w-60 rounded-full"
						: "h-20 w-20 rounded-full",
				].join(" ")}
				onClick={() => setIsOpen(!isOpen)}
				transition={{
					layout: { duration: 1 },
				}}
			>
				<motion.div
					layout
					className=" bg-orange-400 h-10 w-10 rounded-full  "
				></motion.div>
			</motion.div>
		</div>
	);
};

export default ScaleCorrection;

