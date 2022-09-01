import React, { useState } from "react";
import "./Menu.css";
import menuItems from "./menuItems.js";
import Items from "./Items";

function Menu() {
  const [list, setList] = useState(menuItems);

  function filterItems(category) {
    if (category === "all") {
      setList(menuItems);
      return;
    }

    const filteredItems = menuItems.filter(
      (menuItem) => menuItem.category === category
    );
    setList(filteredItems);
  }

  return (
    <div className="Menu">
      <h1 className="title">HOTEL MARINA PARK</h1>

      <div className="underline"></div>

      <div className="buttons">
        <button onClick={() => filterItems("all")}>ALL</button>
        <button onClick={() => filterItems("starters")}>STARTERS</button>
        <button onClick={() => filterItems("main")}>MAIN</button>
        <button onClick={() => filterItems("desserts")}>DESSERTS</button>
      </div>
      <h1 className="note">
        This project is not mobile friendly at the moment. <br />
        Please view on a desktop screen.
      </h1>
      <Items list={list} />
    </div>
  );
}

export default Menu;
