import { useEffect, useState } from "react";
import { sun, moon } from "../../assets";

const DarkModeToggle = (props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const rootClasses = document.documentElement.classList;
    isDark ? rootClasses.add("dark") : rootClasses.remove("dark")
  }, [isDark]);

  return (
    <button className="transition-transform outline-none focus:outline-palette-secondary hover:scale-105"
      onClick={() => setIsDark(() => !isDark)}
    >
      <img src={isDark ? moon : sun} alt="dark mode toggle" />
    </button>
  );
}

export default DarkModeToggle;
