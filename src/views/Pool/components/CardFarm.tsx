import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ArrowDown from "../../../assets/Icons/ArrowDown";

const CardFarm: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Div className="card poolcard">
      <div className="top">
        <img src="images/usertemp.png" alt="" />
        <div>
          <h4 className="color-d">Cake - BNB</h4>
         <div><span className="times">40x</span> <span>Core</span></div>
        </div>
        
      </div>
      
      <div className="row">
        <div className="col-6">
          Total Liquidity
          <h4 className="color-d">$923.948.999</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
        Earned
          <h4 className="color-d">CAKE + FEES</h4>
        </div>
        <div className="col-6">
        APR
          <h4 className="color-d">55.23%</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
        CAKE=BNB LP Staked
          <h4 className="color-d">0.000</h4>
        </div>
        <div className="col-6">
        Cake Earned
          <h4 className="color-d">0.000</h4>
        </div>
      </div>


      <div className="row btnrow mb-2">
        <div className="col-6">
          <button >Stake LP</button>
        </div>
        <div className="col-6 harvest">
          <button >Harvest</button>
        </div>
      </div>


      <div className={toggle == true ? "dd-arrow active":"dd-arrow" } onClick={() => setToggle(!toggle)}>
        <ArrowDown/>
      </div>
      <div className={toggle == true ? "card-dd active":"card-dd" } >
        <button>Get CAKE-BNB LP</button>
        <a href="/">View Contract</a>
        <a href="/">Se Pair Info</a>
      </div>

    </Div>
  );
};

const Div = styled.div`
padding:20px 20px 10px;
max-width:350px;
min-width:300px;
margin: auto;
margin-top: 30px;
&.poolcard{
  .top{
    display:flex;
    margin-bottom:25px;
    img{
      height:100%;
      width:auto;
      margin-right:20px
    }
    h4{
      margin:0 0 10px;
      font-size:20px;
    }
    span{
      color: #E277E5;
      border-radius: 30px;
      border: 1px solid rgba(226, 119, 229, 0.2);
      padding:6px 12px;
      font-size:12px;
      &.times{
        border: 1px solid rgba(226, 119, 229, 1);
        background:rgba(226, 119, 229, 1);
        color:#fff;
        margin-right:10px;
      }
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
    font-size:15px;
    h4{
      font-size:17px;
      margin-top:10px;
      font-weight:600;
    }
    .col-md-6{
      margin-bottom:18px;
    }

    &.btnrow{
      button{
        max-width:130px;
        min-width:unset;
      }
      .harvest{
        button{
          color: #8DB9DF;
          background:#E8F1F9
        }
      }
    }
  }
  .dd-arrow{
    display:flex;
    justify-content:center;
    margin:10px 0 10px;
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
    transition: all 400ms ease;
    height: 0px;
    overflow:hidden;
    &.active{
      height: 142px;
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
    }
  }
}
`;


export default CardFarm;
