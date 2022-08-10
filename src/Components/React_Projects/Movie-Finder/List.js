import React from "react";
import "./List.css";

function List({ data }) {
  return (
    <div className="movieList">
      {data
        ? data.map((item) => {
            return (
              <div className="movieCard" key={item.id}>
                <div className="movieImg">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="100%"
                    height="100%"
                  />
                </div>

                <div>
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
              </div>
            )}
        )
        : null}
    </div>
  );
}

export default List;
