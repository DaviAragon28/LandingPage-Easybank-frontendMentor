import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => setMenu(!menu)


  // useEffect(() => {
  //   if (!mediaqueryList.matches) {
  //     setMenu(false)
  //   } 

  // }, [mediaqueryList.matches])


  const mediaqueryList = window.matchMedia("(min-width: 768px)");


  mediaqueryList.addEventListener('change', (EventoMediaQueryList) => {
    if (EventoMediaQueryList.matches && menu) {
      setMenu(false)
    }
  });





  return (
    <AppContext.Provider value={{ menu, handleMenu }}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext, AppProvider
}
