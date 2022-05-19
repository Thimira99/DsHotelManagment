import React, { Component , useState, useEffect} from 'react';
import AdminNavbar from '../AdminNavbar/adminNavbar';
import Sidebar from '../SideBar/Sidebar';
import bgImage from '../../images/bgImage.jpg'
function Home() {

    

    return (
        <div>
            <AdminNavbar/>
            <Sidebar />
            <div style={{marginLeft:'300px',marginTop:'-500px'}}>
                <img src={bgImage} alt="bgImage" style={{width:'auto',height:'500px',marginRight:'300px'}}></img>
            </div>
            
        </div>
    )
}

export default Home;