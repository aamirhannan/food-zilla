// const Title = ()=>{
//   <a href="/">
//     <img className="logo"      
//     src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
//     alt="logo" 
//     />
//   </a>
// };


const Header = () => {
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
      </div>
  )
};

export default Header;