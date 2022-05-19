import React, { Component , useState, useEffect} from 'react';
import AdminNavbar from '../AdminNavbar/adminNavbar';
import Sidebar from '../SideBar/Sidebar';

function Home() {

    

    return (
        <div>
            <AdminNavbar/>
            <Sidebar />
            
        </div>
    )
}

export default Home;