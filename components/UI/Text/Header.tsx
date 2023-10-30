import { cn } from "$/utils/classNames";

const Header = ({ title, className }: { title: string; className: string }) => {
	return (
		<h1 className={cn(" text-black font-bold text-5xl", className)}>
			{title}
		</h1>
	);
};

export default Header;

