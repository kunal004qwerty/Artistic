import "./App.scss";

import React from "react";
import LandingPage from "./Pages/LandingPage";

import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";

import Globalstyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const App = () => {
  // const { theme } = useContext(ThemeContext);
  // console.log(theme);

  return (
    <div>
      {/* <Globalstyles /> */}
      <LandingPage />
    </div>
  );
};

export default App;
