import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const AnimationController = ({
	max,
	min,
	value,
	onChange,
}: {
	max: number;
	min: number;
	value: number;
	onChange: (value: number) => void;
}) => {
	return (
		<div className=" w-full">
			<Slider
				className=" "
				allowCross={false}
				value={value}
				max={max}
				min={min}
				defaultValue={[0, max]}
				onChange={(vl: number) => onChange(vl)}
			/>
		</div>
	);
};

export default AnimationController;

