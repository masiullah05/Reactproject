import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
              
       <div className="navbar-header navbar__left">
         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
         <span className="sr-only">Toggle navigation</span>
         <span className="icon-bar"></span>
         <span className="icon-bar"></span>
         <span className="icon-bar"></span>
         </button>
         <a className="navbar-brand" href="google.com">Green<span> Trends</span></a>
       </div>     
       <div className="collapse navbar-collapse navbar-right navbar__right" id="collapse-1">
         <ul className="nav navbar-nav">
         <li className="navbar__text"><Link to='/'>Home</Link></li>
         <li className="navbar__text"><Link to='/Mens'>Mens</Link></li>
         <li className="navbar__text"><Link to='/Women'>Womens</Link></li>
         <li className="navbar__text"><Link to='/Kids'>Kids</Link></li>
         </ul>
         <Link to='/Signin'><button type="button" class="btn btn-default navbar-btn">Sign in</button></Link>
       </div>
      </div>    
   </nav>
  );
}

export default Navbar;