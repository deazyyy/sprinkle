// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nvic1 from "../../assets/Icons/Navicons/Nvic1";
import Nvic2 from "../../assets/Icons/Navicons/Nvic2";
import Nvic3 from "../../assets/Icons/Navicons/Nvic3";
import Nvic4 from "../../assets/Icons/Navicons/Nvic4";
import Nvic5 from "../../assets/Icons/Navicons/Nvic5";


const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [isconnected, setIsconnected] = useState(true);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [activenm, setActivenm] = useState("home");
  function isActive(name: String) {
    return activenm == name;
  }
  function onlinkclick(name: String) {
    setActivenm(name);
    if(click){
      handleClick()
    }
  }
  const body = document.querySelector("body");
  if(click){
    body.style.overflow = "hidden";
  } else{
    body.style.overflow = "scroll";
  }

  return (
    <Nav className="wow fadeInDown " data-wow-duration="0.6s" data-wow-delay="0.5s">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar " onClick={(e) => e.stopPropagation()}>
        <div className="nav-container container">
          {/* <Link exact to="/" className="nav-logo">
            <img src="images/logo.svg" alt="" />
          </Link> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className={isActive("home") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => onlinkclick("home")} 
                className="nav-links"
              >
                <Nvic1/>Home
              </Link>
            </li>
            <li className={isActive("exchange") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/exchange"
                activeClassName="active"
                className="nav-links"
                onClick={() => onlinkclick("exchange")}
                className="nav-links"
              >
                <Nvic2/>Trade
              </Link>
            </li>
            <li className={isActive("farm") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/farm"
                activeClassName="active"
                onClick={() => onlinkclick("farm")}
                className="nav-links"
              >
                <Nvic3/>Farms
              </Link>
            </li>
            <li className="nav-item" className={isActive("pool") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/pool"
                activeClassName="active"
                onClick={() => onlinkclick("pool")}
                className="nav-links"
              >
                <Nvic4/>Pools
              </Link>
            </li>
            <li className="nav-item" className={isActive("pred2") ? "nav-item active" : `nav-item`}>
              <Link
                exact
                to="/prediction"
                activeClassName="active"
                onClick={() => onlinkclick("pred2")}
                className="nav-links"
              >
                <Nvic5/>Predictions
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <Link exact to="/" className="nav-logo">
              <img src="images/logo.png" alt="" />
            </Link>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </Nav>
  );
};


const Nav = styled.nav`
  .navbar {
    height:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 20;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 80px;
    margin-top:40px;
    
    padding:0;
    width:100%;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-bottom:2px solid #E4EEF6
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    height: 100%;
    // transition:all 1s ease
  }

  .nav-logo {
    color: #f5b921;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-bottom: 0;
    height: 100%;
    transition: all 0.5s ease;
  }

  .nav-links {
    color: #375976;
    font-weight:500;
    text-decoration: none;
    padding: 0 10px 14px;
    margin: 0 20px;
    border-bottom: 3px solid transparent;
    font-size: 16px;
    white-space: nowrap;
    &.active {
      color: red;
    }
    svg{
      margin-right:12px;
    }
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    svg{
      path{
        fill:#8DB9DF !important
      }
    }
    &:hover{
      svg{
        path{
          fill:#FDC719 !important
        }
      }
      &:after {
        width: 100%;
        background: #FDC719
      }
    }
    &.active{
      svg{
        path{
          fill:#FDC719 !important
        }
      }
      &:after {
        display: block !important;
        width: 100%;
        background: #FDC719;
        max-width:30px;
      }
    }
  }

  .nav-item:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    bottom: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
    transform: translateY(50%);
    max-width:30px;
    border-radius:100px;
    left: 27px;
  }

  .nav-item .active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
  }

  .connectbtn {
    margin: 0;
    cursor: pointer;
    img{
      margin-right:6px;
      height:20px;
    }
    &:after {
      display: none !important;
    }

    .isconnected{
      display:flex;
      align-items:center;
      h5{
        margin:0;
        font-size:16px;
        margin-right:14px;
      }
      .gradientbtn{
        white-space: nowrap;
        overflow: hidden;
        display:block;
        max-width: 150px;
        text-overflow: ellipsis;
  
      }
    }
  }

  @media screen and (max-width: 960px) {
    .nav-logo{
      img{
        width:120px;
        margin-bottom:20px;
      }
    }
    .navbar {
      height: 40px !important;
      margin-top: 30px;
    }
    .nav-item:after{
      left: 50%;
      max-width: 60px !important;
      transform:translateX(-50%);
    }
    .main-container{
      background-color: #fff;
      z-index: 10;
    }
    .connectbtn{
      justify-content: center;
      margin-top:30px
    }
    .socialIcons{
      justify-content: center; 
      margin-top:40px
    }
    .nav-menu {
      padding:0;
      display: flex;
      flex-direction: column;
      width: 100%;
      // border-top: 1px solid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      // background: rgba(255,255,255,0.1);
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      transition: all 0.5s ease;
    }
    .nav-item {
      color: #fff;
      
    }
    .nav-item .active {
      color: red;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: flex;
      position: absolute;
      top: -45px;
      right: 0;
      // transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #EBCF55;
      width: 100%;
      justify-content: space-between;
      padding: 20px;
      align-items: center;
      .fa{
        font-size:20px
      }
    }
  }
  @media screen and (max-width: 960px) {
    .navbar{
      height:70px
    }
  }
`;


export default Navbar;
