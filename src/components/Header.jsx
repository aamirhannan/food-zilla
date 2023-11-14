import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <div className="header glass">
        <div>
          
          <a href="/">
            <img className="logo"      
            src="/images/logo.jpg"
            alt="logo" />
          </a>

        </div>
            <div className="nav-items">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
            
            {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button> }
        </div>
  )
};

export default Header;