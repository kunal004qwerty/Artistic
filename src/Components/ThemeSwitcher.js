import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import ThemeContext from "../contexts/ThemeContext";
import ThemeList from "../Data/ThemeList";
import "../Styles/ThemeSwitcher.scss";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <input
        type="checkbox"
        id="switcher"
        onChange={toggleTheme}
        checked={theme === ThemeList.dark}
      />
      <label htmlFor="switcher" className="label">
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
