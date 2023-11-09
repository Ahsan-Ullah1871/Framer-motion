"use client";

import ElementScroll from "$/components/UI/FScroll/ElementScroll";
import ScrollLinked from "$/components/UI/FScroll/ScrollLinked";
import ScrollTriggered from "$/components/UI/FScroll/ScrollTriggered";

const Scroll = () => {
	return (
		<div className=" space-y-10">
			<ScrollLinked />
			<ElementScroll />
			<ScrollTriggered />
		</div>
	);
};

export default Scroll;

