import { createContext, useState, useEffect } from "react";
import { SKILLS } from "../../utilis/data";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [selectSkill, setSelectSkill] = useState(SKILLS[0]);
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <GlobalContext.Provider value={{ setSelectSkill, selectSkill, SKILLS, theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}
