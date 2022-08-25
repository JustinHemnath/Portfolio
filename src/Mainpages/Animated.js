import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

/// MAINPAGES ///
import Homepage from "./Homepage";
import Projectspage from "./Projectspage";
import Contact from "./Contact";

/// PROJECTS ///
import Counter from "../Components/React_Projects/Counter/Counter.js";
import Menu from "../Components/React_Projects/Food-Menu/Menu.js";
import ShopList from "../Components/React_Projects/Shopping-List-Redux/ShopList.js";
import ShopListUR from "../Components/React_Projects/Shopping-List-useReducer/ShopListUR.js";
import Weather from "../Components/React_Projects/WeatherAPI/Weather.js";
import Moviefinder from "../Components/React_Projects/Movie-Finder/Moviefinder.js";

const Animated = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />

          <Route path="projectspage">
            <Route index element={<Projectspage />} />
            <Route path="counter" element={<Counter />} />
            <Route path="foodmenu" element={<Menu />} />
            <Route path="shoplist" element={<ShopList />} />
            <Route path="shoplistUR" element={<ShopListUR />} />
            <Route path="weatherapp" element={<Weather />} />
            <Route path="moviefinder" element={<Moviefinder />} />
          </Route>

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </motion.div>
  );
};

export default Animated;
