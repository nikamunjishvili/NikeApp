import CloseX from "./CloseX";

export type iconsName =
	| "closeX"

interface IconsProps {
	iconName: iconsName;
	color?: string;
	width?: number;
	height?: number;
}

function IconComponent({ iconName, color, width, height }: IconsProps) {
	let Icon = null;

	switch (iconName) {
		case "closeX": {
			Icon = CloseX;
			break;
		}
		default: {
			return null;
		}
	}

	return <Icon color={color} width={width} height={height} />;
}

export default IconComponent;
