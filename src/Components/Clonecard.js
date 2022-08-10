import React from "react";
import "../Styles/Clonecard.css";

const Clonecard = (props) => {

  return (
    <div className="clone-card">
      <a
        href={props.clone}
        target="_blank"
        className="card-name"
      >
        {props.name}
      </a>
      <a href={props.main} target="_blank" className="main-site-btn">
        MAIN SITE
      </a>

      <a href={props.git} target="_blank" className="code-btn">
        SOURCE CODE
        <span>
          <i className="fa-brands fa-github"></i>
        </span>
      </a>
    </div>
  );
};

export default Clonecard;
