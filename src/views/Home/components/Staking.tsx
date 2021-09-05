import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Staking: React.FC = () => {
  return (
    <Div className="card">
      <h4>Farm & Staking</h4>
      <div className="bx">
        ~ $0.00 Total harvest value
        <h2 className="color-d">0.000</h2>
      </div>
      <div className="bx">
        ~ $0.00 Total harvest value
        <h2 className="color-d">0.000</h2>
      </div>
      <button>Harvest All</button>
    </Div>
  );
};

const Div = styled.section`
  text-align:center;
  h4{
    margin-bottom:20px;
  }
  .bx{
    margin:8px 0;
    h2{
      margin-top:8px;
    }
  }
  button{
    width:fit-content;
    margin: 20px auto 0;
  }
`;


export default Staking;
