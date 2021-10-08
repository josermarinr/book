import React, { useState } from "react";
import STYLE from "./NavigationLayout.module.scss";

export const NavigationLayout = ({
	key,
	index,
	data,
	currentTitle,
	setCurrentData,
}) => {
	const myIndex = data.findIndex((obj) => obj.title === currentTitle) === index;

	const [changeClass, setChangeClass] = useState(false);

	let ActiveClass =
		changeClass || myIndex
			? `${STYLE.navigationLayout__navItem_active}`
			: `${STYLE.navigationLayout__navItem}`;

	return (
		<div className={STYLE.navigationLayout} key={key}>
			<div
				className={ActiveClass}
				onClick={() => setCurrentData(data[index])}
				onMouseLeave={() => setChangeClass(false)}
				onMouseOver={() => setChangeClass(true)}
			>
				0{index + 1}
			</div>
		</div>
	);
};
