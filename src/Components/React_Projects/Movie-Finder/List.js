import React from "react";
import "./List.css";
import { motion } from "framer-motion";

function List({ data }) {
  return (
    <div className="movieList">
      {data
        ? data.map((item) => {
            return (
              <motion.div
                className="movieCard"
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="movieImg">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="100%"
                    height="100%"
                  />
                </div>

                <div>
                  <p>
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            );
          })
        : null}
    </div>
  );
}

export default List;
