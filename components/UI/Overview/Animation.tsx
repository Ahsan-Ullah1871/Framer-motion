"use client";
import { useState } from "react";
import Header from "../Text/Header";
import { motion } from "framer-motion";
import AnimationController from "../Controller/AnimationController";

const Animation = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [rotate, setRotate] = useState(0);

	return (
		<div>
			<Header
				className="text-center text-[#389B48]"
				title="Simple Animation"
			/>
			{/* Controller */}
			<div className=" bg-white p-6 max-w-sm  flex flex-col  items-center justify-center gap-2  mx-auto mt-10 ">
				{/* X */}
				<div className="flex flex-col gap-2 w-full">
					<p className="text-center">X: {x}</p>
					<AnimationController
						min={0}
						max={300}
						onChange={(vl) => setX(vl)}
						value={x}
					/>
				</div>
				{/* Y */}
				<div className="flex flex-col gap-2 w-full mx-auto">
					<p className="text-center">Y: {y}</p>
					<AnimationController
						min={0}
						max={300}
						onChange={(vl) => setY(vl)}
						value={y}
					/>
				</div>

				<div className="flex flex-col gap-2 w-full">
					<p className="text-center">
						Rotate: {rotate}
					</p>
					<AnimationController
						min={0}
						max={360}
						onChange={(vl) => setRotate(vl)}
						value={rotate}
					/>
				</div>
			</div>

			{/* Motion  */}
			<motion.div
				className=" w-60 h-60 border-4 border-orange-500 border-dashed rounded-md mx-auto mt-6"
				animate={{ x: x, y: y, rotate: rotate }}
			/>
		</div>
	);
};

export default Animation;

