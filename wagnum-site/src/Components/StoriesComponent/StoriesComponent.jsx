import React from "react";
import STYLE from "./StoriesComponent.module.scss";
import mocks from "./StoriesComponent.mocks.json";

export const StoriesComponent = () => {
	const data = mocks.data;

	return (
		<div className={STYLE.storyComponent}>
			<div
				className={STYLE.storyComponent__header}
				style={{
					background: "url('./assets/roundbox.jpg')",
					backgroundSize: "cover",
				}}
			>
				<div className={STYLE.storyComponent__header__tile}>
					For every bite a moment
				</div>
			</div>

			<div className={STYLE.storyComponent__storiesCards}>
				{data.map((post) => (
					<div className={STYLE.storyCard}>
						<span>{post.type}</span>
						<h3>{post.title}</h3>
						<p>{post.resume}</p>
						<div className={STYLE.storyCard__button}>
							<button>read more ...</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
