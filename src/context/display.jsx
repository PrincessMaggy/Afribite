import { createContext, useState } from "react";

export const displayContext = createContext()

const DisplayContextProvider = (props) => {
    const[visible, setVisible] = useState(false)
    const [showProfile, setShowProfile] = useState(true)

    const value ={
        visible, setVisible, showProfile, setShowProfile
    }
    return(
        <displayContext.Provider value={value}>
            {props.children}
        </displayContext.Provider>
    )
}

export default DisplayContextProvider