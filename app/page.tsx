import Overview from "$/components/ByPages/Overview/Overview";
import Keyframe from "$/components/UI/Overview/Keyframe";
import Transition from "$/components/UI/Overview/Transition";
import Image from "next/image";

export default function Home() {
	return (
		<div className=" min-h-screen max-w-screen  px-6 py-12  space-y-20">
			<Overview />
			<Transition />
			<Keyframe />
		</div>
	);
}

