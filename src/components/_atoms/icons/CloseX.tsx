import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
	<Svg {...props} xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
		<Path
			{...props}
			d="M10.707 10.293a.292.292 0 0 1-.413.413L7 7.412l-3.293 3.294a.29.29 0 0 1-.413 0 .292.292 0 0 1 0-.412L6.587 7 3.294 3.706a.292.292 0 0 1 .412-.412l3.293 3.294 3.294-3.294a.292.292 0 0 1 .412.412L7.412 7l3.295 3.293Z"
		/>
	</Svg>
);
export default SvgComponent;
