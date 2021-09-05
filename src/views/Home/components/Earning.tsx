import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Earning: React.FC = () => {
  return (
    <Div >
      <div className="mrow mrow1">
        <div className="bx">
          <div>Earn up to APR</div>
          <b className="color-d">213.23%</b>
        </div>
        <button>In Farm</button>
      </div>
      <div className="mrow mrow2">
        <div className="bx">
          <div>Total value locked</div>
          <b className="color-d">213.23%</b>
        </div>
        <button>Account TVL</button>
      </div>
    </Div>
  );
};

const Div = styled.section`
  text-align:left;
  display:flex;
  flex-direction:column;
  height: 100%;
    justify-content: space-between;
  .mrow{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:14px;
    &.mrow1{
      background:rgba(141, 185, 223, 0.2);
      border-radius: 12px;
      padding: 28px 32px;
    }
    &.mrow2{
      background:rgba(253, 199, 25, 0.1);
      border-radius: 12px;
      padding: 28px 32px;
      margin-bottom:0;
      .bx{
        div{
          color: #B79116;
        }
      }
      button{
        background: #FDC719;
      }
    } 
  }
  .bx{
    margin-right:10%;
    min-width:200px;
    font-size:15px;
    div{
      margin-bottom:3px
    }
    b{
      font-size:19px;
      font-weight:700;
    }
  }
  @media screen and (max-width: 1300px) {
    .bx{
      min-width:unset;
    }
  }
`;


export default Earning;
