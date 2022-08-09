import React from "react";
import "../Styles/Procard.css";
import { useSelector } from "react-redux";
import { themeState } from "../Features/themeSlice";

const Projectcard = (props) => {
  const theme = useSelector(themeState);
  return (
    <div className="pro-card">
      <div
        className="card-name"
        style={{
          backgroundColor: theme.sectionColor,
          color: theme.fontColor,
        }}
      >
        {props.children}
      </div>
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
