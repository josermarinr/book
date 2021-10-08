import React from "react";
import { Link } from "react-router-dom";
import STYLE from "./SignupComponent.module.scss";
import { SignupForm } from "./SignupForm/SignupForm";

export const SignupComponent = () => {
	return (
		<div className={STYLE.SignupComponent}>
			<div
				className={STYLE.SignupComponent__leftSide}
				style={{
					background: "url('./assets/bgSignup.jpg') center",
					backgroundSize: "cover",
				}}
			></div>

			<div className={STYLE.SignupComponent__rightSide}>
				<p className={STYLE.SignupComponent__rightSide__subtitle}>
					Already have an accout?
					<Link to="/">Login</Link>
				</p>
				<h3 className={STYLE.SignupComponent__rightSide__title}>
					Create account
				</h3>

				<SignupForm />
			</div>
		</div>
	);
};
