import React, { useContext } from 'react';
import './BaseHeader.css';
import { AiOutlineBars } from 'react-icons/ai';
import { sidebarContext } from '../../context/SidebarContext';

const BaseHeader = () => {

    const { handleOpenSidebar } = useContext(sidebarContext);

    return (
        <div className="base-header">
            <AiOutlineBars className="base-header-icon" onClick={handleOpenSidebar}/>
            <p className="base-heading"> Course Creation </p>
            {/* <p className="close"> close administrator pannel</p> */}
        </div>
    )
}

export default BaseHeader