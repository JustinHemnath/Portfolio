import React from "react";
import "../Styles/Procard.css";

const Projectcard = (props) => {
  return (
    <div className="pro-card">
      
      {props.children}

      <a href={props.gitlink} target="_blank" className="code-btn">
        SOURCE CODE
        <span>
          <i className="fa-brands fa-github"></i>
        </span>
      </a>
    </div>
  );
};

export default Projectcard;
