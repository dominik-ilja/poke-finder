import { useEffect, useState } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

export default function DarkModeToggle(props) {
  const classes = "focus:outline-palette-secondary hover:scale-105 outline-none transition-transform";

  const [isDark, setIsDark] = useState(false);
  const icon = isDark ? moon : sun;

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button className={classes} onClick={() => setIsDark(() => !isDark)}>
      <img src={icon} alt="dark mode toggle" />
    </button>
  );
}
