import React, { createContext,useState } from 'react'



export const sidebar = createContext()
const SidebarContext = ({children}) => {

    const [menu, setmenu] = useState("100%");

  return (
    <div>
        <sidebar.Provider value={[menu,setmenu]}>

        {children}
        </sidebar.Provider>
        </div>
  )
}

export default SidebarContext