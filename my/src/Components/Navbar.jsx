import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

  

const Navbar = () => {
  return (
    <div className="nav">
        
        <img  src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="Error" />

      <Link to={"/"} className="navlinks">
        HOME
      </Link>
      <Link to={"/haircare"} className="navlinks">
      WOMEN
      </Link>
      <Link to={"/bestseller"} className="navlinks">
        MEN
      </Link>
      <Link to={"/specialoffer"} className="navlinks">
        BEAUTY
      </Link>
      <Link to={"/about"} className="navlinks">
        WHY MODESENS
      </Link>
      <Link to={"/perkprogram"} className="navlinks">
        DESINERS
      </Link>
      <Link to={"/becomeconsultant"} className="navlinks">
        BECOME A CONSULTANT
      </Link>
      <Link to={"/login"} className="navlinks">
        Login
      </Link>
      {/* <Link to={"/signup"} className="navlinks">
        Signup
      </Link> */}
    </div>
    
  );
};

export default Navbar;