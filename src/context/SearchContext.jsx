import React, { createContext, useState } from 'react'

export const Sea = createContext()

const SearchContext = ({children}) => {

    const [sea,setsea]= useState('')
    
    

  return (
    <div>
        <Sea.Provider value={[sea,setsea]} >

        {children}
        </Sea.Provider>
        </div>
  )
}

export default SearchContext