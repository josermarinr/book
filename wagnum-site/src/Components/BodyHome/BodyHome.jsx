import React, { useState } from "react";
import STYLE from "./BodyHome.module.scss";
import { CenterLayout } from "./CenterLayout/CenterLayout";
import { NavigationLayout } from "./NavigationLayout/NavigationLayout";
import { Sidebar } from "./Sidebar/Sidebar";

export const BodyHome = () => {
	const data = [
		{
			title: "Almond",
			url: 1,
			image: "magnumPreview",
		},
		{
			title: "White",
			url: 2,
			image: "magnumwhite",
		},
		{
			title: "double caramel",
			url: 3,
			image: "magnumClasic",
		},
		{
			title: "Gold",
			url: 4,
			image: "magnumCaramel",
		},
	];

	const [currentData, setCurrentData] = useState(data[0]);

	return (
		<div className={STYLE.bodyHome}>
			<Sidebar text={currentData.title} />
			<CenterLayout imageName={currentData.image} />
			<div>
				{data.map((link, id) => (
					<NavigationLayout
						key={id}
						index={id}
						currentTitle={currentData.title}
						data={data}
						setCurrentData={setCurrentData}
					/>
				))}
			</div>
		</div>
	);
};
