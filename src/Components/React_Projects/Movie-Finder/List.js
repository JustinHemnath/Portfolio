import React from "react";
import "./List.css";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { themeState } from '../../../Features/themeSlice'

function List({ data }) {
  const theme = useSelector(themeState)

  return (
    <div className="movieList">
      {data.map((item) => {
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

                <div className="movieDesc" style={{ color: theme.fontColor, }}>
                  <p>
                    {item.title}
                  </p>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
    </div>
  );
}

export default List;
