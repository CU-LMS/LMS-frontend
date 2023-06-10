import { createContext, useContext, useState } from "react";

export const sidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
 
    const [isSidebar, setIsSidebar] = useState(false);

    console.log(isSidebar)

    // handle open sidebar
    const handleOpenSidebar = () => {
        setIsSidebar(true);
    }

    // handle close sidebar 
    const handleCloseSidebar = () => {
        setIsSidebar(false);
    }

    let values = {

        isSidebar, 
        handleCloseSidebar,
        handleOpenSidebar
    }

    return(
        <sidebarContext.Provider value={values}>
            { children }
        </sidebarContext.Provider>
    )

}

export default SidebarContextProvider;