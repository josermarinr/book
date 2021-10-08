import React from "react";
import STYLE from "./CenterLayout.module.scss";

export const CenterLayout = ({ imageName }) => {
	return (
		<div className={STYLE.centerLayout}>
			<h3 className={STYLE.centerLayout__subtitle}>true to pleasure</h3>
			<div className={STYLE.centerLayout__image}>
				<span>W</span>
				<span>A</span>
				<span>G</span>
				<img
					src={`./assets/${imageName}.png`}
					alt=""
					className={STYLE.centerLayout__image__image}
				/>
				<span>N</span>
				<span>U</span>
				<span>M</span>
			</div>
		</div>
	);
};
