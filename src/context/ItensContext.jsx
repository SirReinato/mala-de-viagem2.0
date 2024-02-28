import { createContext, useState } from "react";

export const ItensContext = createContext();
ItensContext.displayName ="Itens";

export const ItensProvider = ({children}) =>{
  const [osItens, setOsItens] = useState([]);

  return (
    <ItensContext.Provider value={{osItens, setOsItens}}>
        {children}
    </ItensContext.Provider>
  )

}