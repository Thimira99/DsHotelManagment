import React, { Component , useState, useEffect} from 'react';
import AdminNavbar from '../AdminNavbar/adminNavbar';
import Sidebar from '../SideBar/Sidebar';
import bg2 from '../../images/bg2.png'
function Home() {

    

    return (
        <div>
            <AdminNavbar/>
            <Sidebar />
            <div style={{marginLeft:'500px'}}>
                {/* <img src={bg2} alt="bgImage2" style={{width:'auto',height:'600px',marginRight:'100px'}}></img> */}
                <div style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
                <form method="">
                    <div className="row">
                        <div style={{marginTop:'-1500px'}}>

                        </div>
                        <div style={{marginTop:'-650px',marginLeft:'-100px'}}>
                            <div className="profile-head">

                                <br/>
                                <div className="box"
                                     style={{
                                         backgroundImage: `url(${bg2})`,
                                         backgroundSize: "cover",
                                         backgroundColor:"rgba(0,0,0,0.6)",
                                         marginTop:'-40px',
                                         width:'100%',
                                         marginLeft:'-150px'
                                     }}>
                                     <br/>
                                <h2 className="h2" style={{fontWeight:"bolder"}}>Inside Shangri-La Circle</h2>
                                <p className="para" style={{fontWeight:"bold"}}>

                                    <br/>
                                    We are the exclusive dealer / distributor for all brands spare parts in Sri Lanka and a fully owned subsidiary of GQ-International PVT(Ltd). Hence, we are a global member company of every prestigious Groups.
                                    Embracing the traditions and passing it on to future generations,
                                    while reaching global destinations, GQ-International is the only automobile company in the country to be 100%
                                    owned by its own company company, the GQ-International.
                                    This global backing makes our company a truly global corporate entity, contributing to its customers, corporates, society and country.

                                    <hr/>
                                    GQ-International: <p style={{fontWeight:'bold',color:'red'}}> Specialist in Auto door handles </p>
                                    RANKINGS:<p style={{fontWeight:'bold',color:'red'}}><span>1/10</span></p>
                                    Web site:<p style={{fontWeight:'bold',color:'red'}}><a href="/">GQ-International</a></p>
                                    Our Products:<p style={{fontWeight:'bold',color:'red'}}> <a href="/items">Products of GQ-International</a></p>
                                    Hot Line:<p style={{fontWeight:'bold',color:'red'}}> 0112344568 / 0727787788 </p>
                                    Follow Us On:<p style={{fontWeight:'bold',color:'red'}}><a href="https://www.instagram.com/">instagram</a> <br/><a href="https://www.twitter.com/">Twitter</a></p>
                                    Location:<p style={{fontWeight:'bold',color:'red'}}> 231/10 2/3, <br/>
                                    Panchikawatta Rd,
                                    Colombo 10 </p>

                                    </p>
                                </div>
                                <br/>

                                <div className="box1">
                                    <div>
                                    <h1 style={{width:'100%',color:'#B22222',fontWeight:'bold'}}>OUR VISION</h1>
                                    <p className="box1p1">“TO BECOME THE MOST RESPECTED & ADMIRED TOTAL AUTOMOBILITY<br/>
                                        SOLUTIONS PROVIDER IN THE COUNTRY”</p>
                                    </div>

                                <div className="verticalLine">
                                    <div className="divM">
                                        <h1 className="box1h1">MISSION</h1>
                                        <p className="box1p2">“TO CREATE DELIGHTED LIFE-TIME CUSTOMERS & <br/> LIFETIME DELIGHTED EMPLOYEES”</p>
                                    </div>
                                </div>



                            </div>
                        </div>


                        </div>
                    </div>

                </form>
            </div>
            </div>
        </div>
    )
}

export default Home;