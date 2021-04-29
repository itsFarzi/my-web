import React, {
	useRef,
	useState,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from "react";
import { chunk } from "lodash";

const Controller = ({ dataCalenderRef }) => {
	return (
		<div id="data-calender-controller">
			<div
				id="data-calender-controller-left"
				className="data-calender-controller-button"
				children={<i class="fas fa-angle-left" />}
				onClick={() => dataCalenderRef.current.previous()}
			/>
			<div
				id="data-calender-controller-right"
				className="data-calender-controller-button"
				children={<i class="fas fa-angle-right" />}
				onClick={() => dataCalenderRef.current.next()}
			/>
			<div id="data-calender-controller-bar" />
		</div>
	);
};

const DataCalender = ({ data = [], noOfColumns = 2 }, ref) => {
	const [index, setIndex] = useState(0);

	const scrollViewRef = useRef();

	const WIDTH = 800;

	useImperativeHandle(ref, () => ({
		next,
		previous,
		index,
	}));

	useEffect(() => {
		scrollViewRef.current.scrollTo({
			left: index * WIDTH,
		});
	}, [index]);

	const next = () =>
		index < chunk(data, noOfColumns).length - 1 && setIndex(index + 1);

	const previous = () => index > 0 && setIndex(index - 1);

	const renderItems = (
		{ title = "", from = "", to = "", description = "", sub_title = "" },
		index,
		length,
	) => {
		const time = !to
			? "Present"
			: `${new Date(from).getFullYear()} - ${new Date(to).getFullYear()}`;
		return (
			<div
				key={index}
				id="data-calender-item"
				style={{ width: WIDTH / length }}>
				<p id="data-calender-title" children={title} />
				<p id="data-calender-subTitle" children={sub_title} />
				<p id="data-calender-time" children={time} />
				<p
					children={description}
					className="heading-tertiary"
					id="data-calender-description"
				/>
			</div>
		);
	};

	const renderItem = (item = [], index) => (
		<div
			key={index}
			className="flex"
			style={{ minWidth: WIDTH }}
			children={item.map((e, i) => renderItems(e, i, item.length))}
		/>
	);

	return (
		<div
			id="data-calender"
			ref={scrollViewRef}
			style={{ maxWidth: WIDTH }}
			children={chunk(data, noOfColumns).map(renderItem)}
		/>
	);
};

export { Controller };
export default forwardRef(DataCalender);
