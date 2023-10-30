"use client";

import ScaleCorrection from "$/components/UI/FLayouts/ScaleCorrection";
import SharedLayout from "$/components/UI/FLayouts/SharedLayout";

const FLayouts = () => {
	return (
		<div className=" space-y-10">
			<ScaleCorrection />
			<SharedLayout />
		</div>
	);
};

export default FLayouts;

