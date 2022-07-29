import React from "react";
import { Link } from "react-router-dom";

const CTAcard = ({
  imgObj,
  imgAlt,
  cardHeading,
  cardDesc,
  linkText,
  cardNo,
}) => {
  return (
    <div className={`c-contentcta_card c-contentcta_card${cardNo + 1}`}>
      <Link to="/" className="c-contentcta_link w-inline-block">
        <img src={imgObj} alt={imgAlt} className="c-contentcta_card_img" />
        <div className="c-contentcta_card_desccontainer">
          <h5 className="c-contentcta_card_title">{cardHeading}</h5>
          <p className="c-contentcta_card_desc">{cardDesc}</p>
        </div>
        <p className="c-contentcta_card_btn">{linkText}</p>
      </Link>
    </div>
  );
};

export default CTAcard;
