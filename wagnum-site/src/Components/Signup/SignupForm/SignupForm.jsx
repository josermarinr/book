import React from "react";
import STYLE from "./SignupForm.module.scss";

export const SignupForm = () => {
	return (
		<form action="" className={STYLE.signupForm}>
			<div className={STYLE.signupForm__itemInput}>
				<label htmlFor="">Username</label>
				<input type="text" name="" id="" />
			</div>

			<div className={STYLE.signupForm__itemInput}>
				<label htmlFor="">Email</label>
				<input type="text" name="" id="" />
			</div>

			<div className={STYLE.signupForm__itemInput__flex}>
				<div className={STYLE.signupForm__itemInput}>
					<label htmlFor="">Password</label>
					<input type="password" name="" id="" />
				</div>
				<div className={STYLE.signupForm__itemInput}>
					<label htmlFor="">Confirm</label>
					<input type="password" name="" id="" />
				</div>
			</div>

			<div className={STYLE.signupForm__itemCheck}>
				<input type="checkbox" name="" id="" />
				<p>
					By creating an account, you agree to the Terms of Services and
					Conditions, and Privacy Policy
				</p>
			</div>

			<div className={STYLE.signupForm__submit}>
				<button>Create account</button>
			</div>
		</form>
	);
};
