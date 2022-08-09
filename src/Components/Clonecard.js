import React from "react";
import "../Styles/Clonecard.css";
import { useSelector } from "react-redux";
import { themeState } from "../Features/themeSlice";

const Clonecard = (props) => {
  const theme = useSelector(themeState);

  return (
    <div className="clone-card">
      <a
        href={props.clone}
        target="_blank"
        className="card-name"
        style={{
          backgroundColor: theme.sectionColor,
          color: theme.fontColor,
        }}
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
