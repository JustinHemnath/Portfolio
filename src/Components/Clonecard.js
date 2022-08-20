import React from "react";
import "../Styles/Clonecard.css";

const Clonecard = ({ clone, name, main, git, shadow, bgColor, color }) => {

  return (
    <div className="clone-card" style={{ boxShadow: shadow, backgroundColor: bgColor }}>
      <a
        href={clone}
        target="_blank"
        className="card-name"
        style={{  color: color }}
      >
        {name}
      </a>
      <a href={main} target="_blank" className="main-site-btn">
        MAIN SITE
      </a>

      <a href={git} target="_blank" className="code-btn">
        SOURCE CODE
        <span>
          <i className="fa-brands fa-github"></i>
        </span>
      </a>
    </div>
  );
};

export default Clonecard;
