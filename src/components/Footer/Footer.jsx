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
              <img
                src={abstractLogo}
                alt="Abstract Logo"
                className="c-footer_logo"
              />
            </Link>
            <div className="c-footer_copyright">
              © Copyright 2022
              <br />
              Abstract Studio Design, Inc.
              <br />
              ‍All rights reserved
            </div>
          </div>
          <div className="c-footer_col c-footer_col2">
            <h6 className="c-footer_col_title">Resources</h6>
            {resources.map((link) => (
              <Link to="/" className="c-footer_link">
                {link}
              </Link>
            ))}
          </div>
          <div className="c-footer_col c-footer_col3">
            <h6 className="c-footer_col_title">Company</h6>
            {company.map((link) => (
              <Link to="/" className="c-footer_link">
                {link}
              </Link>
            ))}
            <h6 className="c-footer_col_title">Contact Us</h6>
            {contactUs.map((link) => (
              <Link to="/" className="c-footer_link">
                {link}
              </Link>
            ))}
          </div>
          <div className="c-footer_col c-footer_col4">
            <h6 className="c-footer_col_title">Social</h6>
            {social.map((link) => (
              <Link to="/" className="c-footer_link">
                {link}
              </Link>
            ))}
          </div>
          <div className="c-footer_copyright c-footer_copyright-mb">
            © Copyright 2022
            <br />
            Abstract Studio Design, Inc.
            <br />
            ‍All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
