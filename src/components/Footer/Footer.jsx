import React from "react";
import { Link } from "react-router-dom";

// import style
import "./Footer.scss";

// Importing logo
import abstractLogo from "../../assets/images/Abstract_Wordmark-White.svg";

// Constants
const resources = [
  "Blog",
  "Help Center",
  "Contact Support",
  "Release Note",
  "Status",
];
const company = ["About Us", "Creers", "Legal", "Privacy", "Term of Use"];
const contactUs = ["info@abstract.com"];
const social = ["Twitter", "LinkedIn", "Facebook", "Dribble"];

const Footer = () => {
  return (
    <footer className="c-footer_container">
      <div className="c-section c-section_footer wf-section">
        <div className="c-grid c-grid_footer">
          <div className="c-footer_col c-footer_col1">
            <Link to="/" className="c-footer_logolink">
              <img src={abstractLogo} alt="" className="c-footer_logo" />
            </Link>
            <div className="c-footer_copyright">
              © Copyright 2022
              <br />
              Abstract Studio Design, Inc.
              <br />
              ‍All rights reserved
            </div>
          </div>
          <div className="c-footer_col">
            <h6 className="c-footer_columntitle">Resources</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
