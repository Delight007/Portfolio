import { createContext, useState } from "react";
import { SKILLS } from "../../utilis/data";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [selectSkill, setSelectSkill] = useState(SKILLS[0]);
  return (
    <GlobalContext.Provider value={{ setSelectSkill, selectSkill, SKILLS }}>
      {children}
    </GlobalContext.Provider>
  );
}
