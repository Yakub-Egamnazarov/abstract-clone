import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

// importing Image as component
import { ReactComponent as Logo } from "../../assets/images/Abstract_Wordmark-White.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-grid">
        <div className="header__logo-container">
          <Link to="/" className="header__logo-link">
            <Logo />
          </Link>
        </div>
        <div className="header__cta-container">
          <Link to="/" className="c-link c-link-text c-link-text-reverse">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
