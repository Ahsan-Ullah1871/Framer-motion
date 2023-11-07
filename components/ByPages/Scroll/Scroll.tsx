"use client";

import ElementScroll from "$/components/UI/FScroll/ElementScroll";
import ScrollLinked from "$/components/UI/FScroll/ScrollLinked";

const Scroll = () => {
	return (
		<div className=" space-y-10">
			<ScrollLinked />
			<ElementScroll />
		</div>
	);
};

export default Scroll;

