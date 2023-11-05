"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MainNavbar = () => {
	let menus = [
		{
			title: "Overview",
			href: "/",
		},
		{
			title: "Layouts",
			href: "/layouts",
		},
		{
			title: "Gestures",
			href: "/gestures",
		},
	];

	const pathName = usePathname();
	console.log(pathName);

	return (
		<div className="  bg-[#F2F0E6]  max-w-[1170px] mx-auto sticky top-4   p-6 rounded-md shadow flex items-center justify-start gap-4  ">
			{menus.map((menu) => {
				return (
					<Link
						key={menu.href}
						className="px-3 py-2  text-sm font-semibold text-[#000000] relative"
						href={menu.href}
					>
						{menu.title}
						{menu.href === pathName ? (
							<motion.div
								className=" bg-orange-300  bg-opacity-20   absolute  h-full w-full top-0 left-0 border-b border-orange-500 "
								layoutId="menu"
							/>
						) : null}
					</Link>
				);
			})}
		</div>
	);
};

export default MainNavbar;

