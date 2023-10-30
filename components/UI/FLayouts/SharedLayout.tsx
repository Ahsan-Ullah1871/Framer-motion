import React, { useState } from "react";
import { AnimatePresence, motion, exit } from "framer-motion";
import Header from "../Text/Header";
import { allIngredients } from "$/data/LayoutWorkData";

const SharedLayout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedTab, setSelectedTab] = useState(allIngredients[0]);

	return (
		<div>
			<Header
				className="text-center text-[#389B48]"
				title="Shared Layout"
			/>

			{/* shared layout */}
			<div className=" max-w-4xl min-h-[300px] mx-auto bg-white shadow rounded-md mt-6">
				<nav className=" border-b  border-neutral-300 border-opacity-60">
					<ul className="flex items-center justify-start ">
						{allIngredients.map((item) => {
							return (
								<li
									className=" flex-grow text-center px-3 py-4  tex-lg font-medium cursor-pointer relative"
									key={item.label}
									onClick={() =>
										setSelectedTab(
											item
										)
									}
								>
									{`${item.icon}   ${item.label}`}

									{item.label ===
									selectedTab?.label ? (
										<motion.div
											className=" bg-orange-300  bg-opacity-20   absolute  h-full w-full top-0 left-0 border-b border-orange-500 "
											layoutId="selected"
										/>
									) : null}
								</li>
							);
						})}
					</ul>
				</nav>

				{/* Item */}

				<motion.div
					key={
						selectedTab
							? selectedTab.label
							: "empty"
					}
					layout
					initial={{
						y: 40,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					exit={{
						y: -40,
						opacity: 0,
					}}
					transition={{
						duration: 1,
					}}
					className={[
						" bg-white w-full h-full min-h-[200px]   flex items-center justify-center ",
					].join(" ")}
				>
					<h1 className=" text-9xl ">
						{selectedTab.icon}
					</h1>
				</motion.div>
			</div>
		</div>
	);
};

export default SharedLayout;

