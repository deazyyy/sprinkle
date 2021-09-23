import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import ExchangeCard from "./components/ExchangeCard";
import LiquidityCard from "./components/LiquidityCard";
import Farm from "../../assets/Icons/Slug/Farm";


const Exchange: React.FC = () => {
  
  return (
    <Div>     
      <div className="sectionnav">
        <div className="navslug"><Farm/> Farm</div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="pill" href="#exchangebx">Swap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="pill" href="#liquiditybx">Liquidity</a>
            </li>
          </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="exchangebx">
          <ExchangeCard/>
        </div>
        <div className="tab-pane fade" id="liquiditybx">
        <LiquidityCard/>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.section`
    .sectionnav{
      margin-bottom:50px;
      display:flex;
      .nav{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%)
      }
      
    }
    .nav{
      border: 1px solid rgba(253, 199, 25, 0.3);
      border-radius: 7px;
      margin:0 14px;
      width:fit-content;
      .nav-link{
        color: #375976;
        font-size:15px;
        height:44px;
        display: flex;
        align-items: center;
        font-weight:500;
        min-width:100px;
        justify-content: center;
        &.active{
          background: #FDC719;
          border-radius: 7px;
          color:#fff
        }
      }
    }

    @media screen and (max-width: 500px) {
      .card{
        width:100%;
        padding:20px 22px
      }
      .sectionnav{
        flex-direction:column !important;
        .nav{
          margin-top:30px;
          position:relative;;
          left:50%;
          top:0%;
          transform:translate(-50%,0%)
        }
      }
      
      
    }
`;


export default Exchange;
