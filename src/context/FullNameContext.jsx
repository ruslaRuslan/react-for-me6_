import { createContext } from "react";

export const FN_Context = createContext({ ad: "", email: "" });

const data = { ad: "Ruslan", email: "ruslan@gmail.com" };

const FullNameContext = ({children}) => {
  return (
    <FN_Context.Provider value={data}>
      {children}
    </FN_Context.Provider>
  );
};
export default FullNameContext;
