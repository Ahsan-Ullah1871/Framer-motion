import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";

const ElementScroll = () => {
	const carouselRef = useRef(null);
	const { scrollXProgress } = useScroll({ container: carouselRef });

	console.log("====================================");
	console.log(scrollXProgress);
	console.log("====================================");

	return (
		<div className=" relative">
			<motion.div
				className="bg-orange-600 absolute top-0 left-0 right-0 h-4    origin-top"
				style={{ scaleX: scrollXProgress }}
			/>
			<svg
				id="progress"
				className=" absolute top-2 left-0 right-0 mx-auto rotate-90"
				width="100"
				height="100"
				viewBox="0 0 100 100"
			>
				<circle
					cx="50"
					cy="50"
					r="30"
					pathLength="1"
					className=" stroke-[15%] fill-none stroke-slate-300"
				/>
				<motion.circle
					cx="50"
					cy="50"
					r="30"
					pathLength="1"
					className=" stroke-[15%] fill-none stroke-white"
					style={{ pathLength: scrollXProgress }}
				/>
			</svg>

			<div
				ref={carouselRef}
				className="  max-w-2xl mx-auto flex  items-center justify-start gap-5 overflow-x-scroll py-28 "
			>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
				<div className=" flex-none h-[300px] w-[200px] rounded-md bg-slate-300 "></div>
			</div>
		</div>
	);
};

export default ElementScroll;

