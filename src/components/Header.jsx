import { useState } from "react";

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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
              </ul>
            </div>
            {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button> }
        </div>
  )
};

export default Header;