import React from "react";
import "../Styles/Procard.css";

const Projectcard = ({ gitlink, children, shadow }) => {
  return (
    <div className="pro-card" style={{ boxShadow: shadow }}>
      {children}
      <a href={gitlink} target="_blank" rel="noreferrer" className="code-btn">
        SOURCE CODE
        <span>
          <i className="fa-brands fa-github"></i>
        </span>
      </a>
    </div>
  );
};

export default Projectcard;
