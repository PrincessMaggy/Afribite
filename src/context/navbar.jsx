import { createContext, useState } from "react";

export const NavContext = createContext()

const NavContextProvider = (props) => {
    const[visible, setVisible] = useState(false)

    const value ={
        visible, setVisible
    }
    return(
        <NavContext.Provider value={value}>
            {props.children}
        </NavContext.Provider>
    )
}

export default NavContextProvider