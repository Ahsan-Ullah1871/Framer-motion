import { useFollowPointer } from "$/hooks/use-follow-pointer";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Spring = () => {
	const ref = useRef(null);
	const { x, y } = useFollowPointer(ref);
	return (
		<div className="w-full h-[400px]">
			<motion.div
				ref={ref}
				className=" h-20 w-20 rounded-full  bg-rose-500"
				animate={{ x, y }}
				transition={{
					type: "spring",
					damping: 3,
					stiffness: 50,
					restDelta: 0.001,
					mass: 1,
				}}
			/>
		</div>
	);
};

export default Spring;

