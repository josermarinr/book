import React from 'react'
import STYLE from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={STYLE.logo}>
      <img src={"./assets/logo.png"} className={STYLE.appLogo} alt="logo" />
    </div>
  )
}
