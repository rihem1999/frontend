import {useState}from 'react'
import { assets } from '../../assets/assets';
import './Nav.css';
import { Link } from 'react-router-dom';
import logout from '../../assets/logOut.png';
import profile from '../../assets/profile.png';
// eslint-disable-next-line react/prop-types
const Nav = ({ setShowLogin }) => {
  const[menu,setMenu]=useState("home");
  // check if user is already logged in:
  const authToken = localStorage.getItem('authToken');
  const handleLogOut = () => {
        localStorage.removeItem('authToken');
  }
  return (
    <div className='navbar' id='nav'>
        <img src={assets.logo} alt="Logo" className='logo'/>  
          <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}> Home</Link>
            <li onClick={()=>setMenu("AdoptMe")}className={menu==="AdoptMe"?"active":""}>AdoptMe</li>
            <li onClick={()=>setMenu("Forum")}className={menu==="Forum"?"active":""}>Forum</li>
            <li onClick={()=>setMenu("Contacts")} className={menu==="Contacts"?"active":""}>Contacts</li>
            <a href='#footer' onClick={()=>setMenu("AboutUs")}className={menu==="AboutUs"?"active":""}>AboutUs</a>
          </ul>
          <div className='navbar-right'>
          {(authToken)?
           <div style={{display: "flex", flexDirection: "row"}}>
            <img src={profile} alt="Profile"style={{width: 70, height: 70,}} />
            <img src={logout} alt="logout" onClick={handleLogOut} style={{width: 70, height: 70, paddingLeft:10}} />

          </div> : <button onClick={()=>setShowLogin(true)}>Sign in</button>}
          
          </div>
    </div>
  )
}
export  default Nav;