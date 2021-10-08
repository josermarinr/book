import React from "react";
import STYLE from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { SearchIcon } from "Components/icon/SearchIcon";

export const Header = () => {
  return (
    <div className={STYLE.header}>
      <Link to="/">
        <Logo />
      </Link>

      <ul className={STYLE.header__menu}>
        <li className={STYLE.header__menu__item}>
          <Link to="/" className={STYLE.link}>Home</Link>
        </li>

        <li className={STYLE.header__menu__item}>
          <Link to="/stories" className={STYLE.link} >Stories</Link>
        </li>

        <li className={STYLE.header__menu__item}>
          <Link to="/signup" className={STYLE.link}>Sign up</Link>
        </li>

        <li>
            <Link to="/" className={STYLE.link}>
              <SearchIcon/>
            </Link>
          </li>
      </ul>
    </div>
  );
};
