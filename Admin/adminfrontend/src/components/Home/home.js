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
                <div>
                <form method="">
                    <div className="row">
                        <div style={{marginTop:'-1500px'}}>

                        </div>
                        <div style={{marginTop:'-580px',marginLeft:'-100px',
                                        backgroundImage: `url(${bg2})`,
                                         backgroundSize: "cover",
                                         backgroundColor:"rgba(0,0,0,0.6)",
                                         height:'580px',
                                         width:'100%',
                                         
                        }}>
                            <div className="profile-head">

                                <br/>
                                <div className="box"
                                     style={{
                                        //  backgroundImage: `url(${bg2})`,
                                        //  backgroundSize: "cover",
                                        //  backgroundColor:"rgba(0,0,0,0.6)",
                                        //  marginTop:'-40px',
                                        //  width:'100%',
                                        //  marginLeft:'-50px'
                                     }}>
                                     <br/>
                                <h2 className="h2" style={{fontWeight:"bolder",color:'white',textAlign:'center'}}>Inside Shangri-La Circle</h2>
                                <p className="para" style={{fontWeight:"bold",color:'black'}}>

                                    <br/>
                                    A personal tropical sanctuary that is perfect for escaping the city, 
                                    Shangri-La Circle overlooks the Indian Ocean in the heart of the business district with 
                                    direct access to the most extensive international hotels in Sri Lanka.The hotel offers the finest accommodations in Sri Lanka, 
                                    an exciting new offers and social scene and the largest and extensive hotel conference facilities.
                                    
                                    <hr/>
                                    </p>
                                </div>
                                     <br/>
                                <div className="box1">
                                    <div>
                                    <h1 style={{width:'100%',color:'#B22222',fontWeight:'bold'}}>OUR VISION</h1>
                                    <p className="box1p1">“TO BECOME THE MOST RESPECTED & ADMIRED TOTAL ACCOMMODATION<br/>
                                        SOLUTIONS PROVIDER IN THE COUNTRY”</p>
                                    </div>
                                    <br/>
                                <div className="verticalLine">
                                    <div className="divM">
                                        <h1 className="box1h1">MISSION</h1>
                                        <p className="box1p2">“TO CREATE DELIGHTED LIFE-TIME CUSTOMERS & <br/> LIFETIME DELIGHTED CONTRACTORS</p>
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