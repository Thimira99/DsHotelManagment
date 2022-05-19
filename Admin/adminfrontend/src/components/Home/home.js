import React, { Component , useState, useEffect} from 'react';
import AdminNavbar from '../AdminNavbar/adminNavbar';
import Sidebar from '../SideBar/Sidebar';
import bg2 from '../../images/bg2.png'
function Home() {

    

    return (
        <div>
            <AdminNavbar/>
            <Sidebar />
            <div style={{marginLeft:'500px',marginTop:'-700px'}}>
                <img src={bg2} alt="bgImage2" style={{width:'auto',height:'600px',marginRight:'100px'}}></img>
            </div>
            
        </div>
    )
}

export default Home;