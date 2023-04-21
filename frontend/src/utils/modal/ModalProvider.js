import React, { useState } from "react";


export const ModalStateContext = React.createContext();
export const ModalSetterContext  = React.createContext();

function ModalProvider({ children }) {
  const [state, setState] = useState({
            type: null,
            props: null,
    });
  console.log("ModalProvider");
  return (
    <ModalSetterContext.Provider value={setState}>
      <ModalStateContext.Provider value={state}>
        {children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
}

export default ModalProvider;