import React from "react";
import STYLE from "./Sidebar.module.scss";

export const Sidebar = ({ text }) => {
	return (
		<div className={STYLE.sidebar}>
			<h3 className={STYLE.sidebar__text}>{text}</h3>
		</div>
	);
};
