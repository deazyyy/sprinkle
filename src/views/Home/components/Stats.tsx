import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Stats: React.FC = () => {
  return (
    <Div className="card">
      <div className="mrow">
        <h4 className="bx">Stats</h4>
        <div className="bx">
          <div>Total Liquidity</div>
          <b className="color-d">$923.948.999</b>
        </div>
      </div>

      <div className="mrow">
        <div className="bx">
          <div>Total Liquidity</div>
          <b className="color-d">$67</b>
        </div>
        <div className="bx">
          <div>Total Liquidity</div>
          <b className="color-d">$67.999</b>
        </div>
      </div>

      <div className="mrow">
        <div className="bx">
          <div>Total Liquidity</div>
          <b className="color-d">$9268.999</b>
        </div>
        <div className="bx">
          <div>Total Liquidity</div>
          <b className="color-d">$923.99</b>
        </div>
      </div>

    </Div>
  );
};

const Div = styled.section`
  text-align:left;
  h4{
    margin-bottom:20px;
  }
  .mrow{
    display:flex;
    justify-content:space-between;
    margin-bottom:14px;
  }
  .bx{
    margin-right:10%;
    min-width:200px;
    font-size:15px;
    b{
      font-size:19px;
      font-weight:700;
    }
  }
  h4{
    font-size: 1.5rem !important;
  }

  @media screen and (max-width: 1300px) {
    .bx{
      min-width:50%;
    }
  }
`;


export default Stats;
