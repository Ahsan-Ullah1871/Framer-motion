"use client";
import { useState } from "react";
import Header from "../Text/Header";
import { motion } from "framer-motion";
import AnimationController from "../Controller/AnimationController";

const Keyframe = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [rotate, setRotate] = useState(0);
	const [duration, setDuration] = useState(2);

	return (
		<div>
			<Header
				className="text-center text-[#389B48]"
				title="Keyframe"
			/>
			{/* Controller */}

			{/* Motion  */}
			<motion.div
				className=" w-60 h-60 border-4 bg-orange-500 border-dashed  mx-auto mt-6 "
				animate={{
					x: [0, 400, 400, 0, 0],
					y: [0, 0, -400, -400, 0],
					borderRadius: [
						"0%",
						"20%",
						"50%",
						"30%",
						"0%",
					],
					rotate: rotate,
				}}
				transition={{
					ease: "easeInOut",
					duration: 10,
					repeat: Infinity,
					times: [0, 0.3, 0.5, 0.8, 1],
				}}
			/>
		</div>
	);
};

export default Keyframe;

