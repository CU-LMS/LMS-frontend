import React, { useContext, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { sidebarContext } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const { isSidebar, handleCloseSidebar } = useContext(sidebarContext);

  return (
    <div className={`sidebar ${isSidebar ? "show" : "hide"}`}>
        <div className="sidebar-header">
            <RxCross1 className="sidebar-header-icon" onClick={handleCloseSidebar}/>
        </div>

        <div className="sidebar-body">
            <Link to="/addVideo" className='sidebar-body-item'>Add Video</Link>
            <Link to="/addDocs" className='sidebar-body-item'>Add Docs</Link>
        </div>
    </div>
  )
}

export default Sidebar