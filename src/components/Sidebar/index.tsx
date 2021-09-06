// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Copy from "../../assets/Icons/Copy";
import MagicWand from "../../assets/Icons/MagicWand";
import Bnb from "../../assets/Icons/Bnb";
import Bsclink from "../../assets/Icons/Bsclink";
import { transform } from "typescript";




const Sidebar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [isconnected, setIsconnected] = useState(true);
  const textAreaRef = useRef(null);
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
  return (
    <>
    <Nav style={click ? {left:"0px"} : {left:"-270px"}}>
      
      
      <div className="sidebtn" onClick={() => setClick(!click)}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <nav className="navbar " onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src="images/logo.png" alt="" />
          </Link>
          <div className="box">
            <h4>Your Adress</h4>
            <div className="iptouter" onClick={() => {navigator.clipboard.writeText(textAreaRef.current.value)}}>
              <input   ref={textAreaRef} type="text" value="sdf23432c5646.." readOnly/>
              <Copy />
            </div>
          </div>
          <div className="box">
            <h4>Your Wallet</h4>
            <div className="mrow">
              <header>BNB Balance<Bnb/></header>
              <h5>13.000</h5>
              <div>****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****</div>
            </div>
            <div className="mrow mrow2 mt-3">
              <header>SPRINKLE Balance <MagicWand/></header>
              <h5>13.000</h5>
              <div>****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****</div>
            </div>
            <div className="view">
            <Bsclink/>View on BscCan
            </div>
          </div>
          <div className="box mb-0">
            <h4>Transactions</h4>
            <div className="transrowouter">
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
              <div className="mrowtrans">
                Swap Cake - BUSD
                <Copy/>
              </div>
            </div>

          </div>
        </div>
      </nav>
      <div className="overlay" style={!click?{transform:"scale(0)"}:{transform:"scale(1)"} }/> 
    </Nav>
   
    </>
  );
};


const Nav = styled.nav`
    background: #FFFFFF;
    border=right: 1px solid rgba(141, 185, 223, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(93, 130, 163, 0.05), 3px 10px 19px rgba(93, 130, 163, 0.05);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    height:100vh;
    padding: 20px 0px 0;
    min-width:270px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    transition:all 0.5s ease;
    .navbar{
      background: #fff;
    }
    .sidebtn{
      background: #fff;
      position: absolute;
      right: -45px;
      z-index: 10;
      top: 25vh;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow:0px 0px 5px 6px rgba(0,0,0,0.05); 
      cursor:pointer;
      display:none;
    }
    .nav-container{
      width:100%;
    }
    .nav-logo{
      img{
        width:180px;
        height:auto;
        display:block;
        margin-bottom:40px;
      }
    }

    .box{
      margin-bottom:32px;
      h4{
        margin-bottom:20px;
      }

      .iptouter{
        position:relative;
        input{
          outline:0;
          border:1px solid #E8F1F9;
          border-radius: 7px;
          color: #375976;
          padding: 8px 14px;
          font-size:14px;
          width:100%;
        }
        svg{
          position:absolute;
          right:14px;
          top:50%;
          transform:translateY(-50%);
          cursor:pointer;
          transition:all 0.3s ease;
          &:hover{
            transform:scale(1.1)translateY(-50%)
          }
        }
      }

      .mrow{
        background:rgba(226, 119, 229, 0.2);
        color:rgba(140, 77, 141, 0.7);
        border-radius: 10px;
        padding:14px;
        header{
          font-size:14px;
          margin-bottom:6px;
          font-weight:500;
          display:flex;
          justify-content:space-between;
          align-items:center;
          width:100%;
        }
        h5{
          color:rgba(0, 0, 0, 0.7);
        }
        &.mrow2{
          background:rgba(70, 246, 194, 0.3);
          color:rgba(0, 0, 0, 0.34);
        }
      }
      .view{
        color: #375976;
        font-weight:500;
        margin:14px 0;
        svg{
          margin-right:10px
        }
      }

      .mrowtrans{
        color: #375976;
        border-bottom:2px solid #F2F2F2;
        margin-bottom:10px;
        font-weight:500;
        font-size:16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 10px 10px;
        svg{
          cursor:pointer;
          transition:all 0.3s ease;
          &:hover{
            transform:scale(1.16)
          }
        }
      }
      .transrowouter{
        overflow:scroll;
        height:calc( 100vh - 670px);
        .mrowtrans:last-child{
          border-bottom:0;
          margin-bottom:0;
          padding-bottom:0;
        }
      }
    }
    @media screen and (max-width: 991px) {
      max-width: 270px;
      position:fixed;
      z-index:999;
      height:100%;
      top:0;
      bottom:0;
      padding: 0px 0px 0;
      .navbar{
        padding-top:20px;
        border=right: 1px solid rgba(141, 185, 223, 0.2);
        box-sizing: border-box;
        box-shadow: 0px 0px 6px rgba(93, 130, 163, 0.05), 3px 10px 19px rgba(93, 130, 163, 0.05);
      }
      .box{
        margin-bottom:32px;
        h4{
          font-size:20px;
          <margin-bottom:1></margin-bottom:1>0px;
        }
      }
      .sidebtn{
        display:flex;
      }
    }
`;


export default Sidebar;
