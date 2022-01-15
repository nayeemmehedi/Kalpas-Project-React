import React, { createContext, useState, useEffect } from "react";

export const contextMain = createContext();

const FirstContext = ({ children }) => {

  const [value, setValue] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((v) => {
        setValue(v);
      });
  }, []);


  return (
    <contextMain.Provider value={[value, setValue]}>
      {children}
    </contextMain.Provider>
  );
};

export default FirstContext;
