import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ArrowDown from "../../../assets/Icons/ArrowDown";

const Card: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Div className="card poolcard">
      <div className="top">
        <div>
          <h4 className="color-d">Manual Cake</h4>
          Earn Cake, Stake Cake
        </div>
        <img src="images/usertemp.png" alt="" />
      </div>
      
      <div className="row">
        <div className="col-md-6">
          APR
          <h4 className="color-d">66.99%</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          Cake Earned
          <h4 className="color-d">0</h4>
        </div>
        <div className="col-md-6">
          USD
          <h4 className="color-d">0</h4>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-12">
          <div>Stake Cake</div>
          <button>Enable</button>
        </div>
      </div>

      <div className={toggle == true ? "dd-arrow active":"dd-arrow" } onClick={() => setToggle(!toggle)}>
        <ArrowDown/>
      </div>
      <div className={toggle == true ? "card-dd active":"card-dd" } >
        <div className="btnOuter">
          <button className="border-btn">Manual</button>
          <button className="border-btn ques">?</button>
        </div>
        <div className="totalstaked">
          Total Staked
          <b className="color-d">0.000</b>
        </div>
        <button>See Token Info</button>
        <a href="/">View Project SIte</a>
        <a href="/">View Contract</a>
        <a href="/">Add to Matemask</a>
      </div>

    </Div>
  );
};

const Div = styled.div`
padding:20px 20px 10px;
min-width:320px;
max-width:320px;
margin: auto;
margin-top: 30px;
&.poolcard{
  .top{
    display:flex;
    justify-content:space-between;
    margin-bottom:25px;
    img{
      height:100%;
      width:auto;
    }
    h4{
      margin:0 0 6px;
      font-size:20px;
    }
  }
  button{
    width:100%;
    margin-top:10px;
    font-size:16px;
    font-weight:500
  }
  .row{
    margin-right:-15px;
    margin-left:-15px !important;
   
    h4{
      font-size:18px;
    }
    .col-md-6{
      margin-bottom:18px;
    }
  }
  .dd-arrow{
    display:flex;
    justify-content:center;
    margin:20px 0 10px;
    svg{
      transition: all 600ms ease;
      transform:rotate(0deg);
      transform-origin:center;
      cursor:pointer;
    }
    &.active{
      svg{
        transform:rotate(180deg);
        path{
          fill: #375976 !important;
        }
      }
    }
    
  }


  .card-dd{
    transition: all 600ms ease;
    height: 0px;
    overflow:hidden;
    &.active{
      height: 274px;
    }
    .btnOuter{
      display:flex;
      margin-bottom:10px;
      button{
        width:min-content;
        background:transparent;
        min-width:unset;
        padding-right:16px;
        padding-left:16px;
        &:first-child{
          margin-right:10px;
        }
      }
    }
    .totalstaked{
      display:flex;
      justify-content:space-between;
      margin-bottom:6px;
    }
    button{
      background:#FDC719;
      margin:10px 0;
    }
    a{
      display:block;
      text-align:center;
      color: #FDC719;
      font-weight:600;
      margin:10px 0;
      &:last-child{
        color: #FDA219;
      }
    }
  }
}
`;


export default Card;
