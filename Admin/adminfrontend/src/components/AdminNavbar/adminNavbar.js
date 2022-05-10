import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './adminNavbar.css';


function AdminNavbar() {
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth<= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
useEffect(() =>{
    showButton();
}, []);
    window.addEventListener('resize', showButton);
    return (
        <>
         <nav className="navbar">
         <div className='navbar-container'>
            
            <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
            <img  style={{width:20}} class=" " src="" alt="" />  ADMIN PANEL</Link>
              
            <div className = 'menu-icon' onClick= {handleClick}>
            
            </div>
            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>

             
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Notifications
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                My profile
                </Link>
            </li>

            

 
            </ul>
            {button && <Button buttonStyle = 'btn--outline'> LOG OUT</Button>}
             </div>
            
             </nav>   
        </>
    );
}

export default AdminNavbar;