import React from "react";
import { Header } from "Components/Header/Header";
import { Signup } from "Page/Signup";
import { Stories } from "Page/Stories";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Page/Home";

export const AppRouter = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path={"/"}>
					<Home />
				</Route>

				<Route exact path={"/stories"}>
					<Stories />
				</Route>

				<Route exact path={"/signup"}>
					<Signup />
				</Route>
			</Switch>
		</Router>
	);
};
