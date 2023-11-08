import { allIngredients } from "$/data/LayoutWorkData";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const ScrollTriggered = () => {
	const scrollRef = useRef(null);

	const cardVariants: Variants = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 50,
			rotate: -10,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	return (
		<div className=" max-w-lg mx-auto flex flex-col gap-10 ">
			{allIngredients?.map((item) => {
				return (
					<motion.div
						key={item.label}
						className=" overflow-hidden relative flex items-center justify-center min-h-[400px]"
						initial="offscreen"
						whileInView="onscreen"
						viewport={{
							// once: true,
							root: scrollRef,
							amount: 0.8,
						}}
					>
						<div className="  w-full absolute bottom-0 h-28 bg-orange-300 " />
						<motion.div
							className="text-[200px]"
							variants={cardVariants}
						>
							{item.icon}
						</motion.div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default ScrollTriggered;

