import React from "react";
import { useSelector } from "react-redux";
import { themeState } from './Features/themeSlice'

import Navbar from "./Mainpages/Navbar";
import Animated from "./Mainpages/Animated";



function App() {

  const theme = useSelector(themeState)

  return (
    <div className="App" style={{ backgroundColor: theme.backgroundColor }}>
      <Navbar />
      <Animated />
    </div>
  );
}

export default App;
