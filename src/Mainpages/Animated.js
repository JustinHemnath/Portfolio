import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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

const Animated = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Homepage} />
        <Route exact path="/projectspage" component={Projectspage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projectspage/counter" component={Counter} />
        <Route path="/projectspage/foodmenu" component={Menu} />
        <Route path="/projectspage/shoplist" component={ShopList} />
        <Route path="/projectspage/shoplistUR" component={ShopListUR} />
        <Route path="/projectspage/weatherapp" component={Weather} />
      </Switch>
    </motion.div>
  );
};

export default Animated;
