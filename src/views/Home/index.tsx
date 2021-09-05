import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";


import Replay from "../../assets/Icons/Replay";
import Staking from "./components/Staking";
import Info from "./components/Info";
import Stats from "./components/Stats";
import Earning from "./components/Earning";
import Homeic from "../../assets/Icons/Slug/Home";

const Home: React.FC = () => {
  return (
    <Div>
       <div className="sectionnav">
        <div className="navslug"><Homeic/> Home</div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Staking />
        </div>
        <div className="col-md-6">
          <Info />
        </div>
        <div className="col-md-6">
          <Stats />
        </div>
        <div className="col-md-6">
          <Earning />
        </div>
        
      </div>
      
    </Div>
  );
};

const Div = styled.section`
  .row{
    margin:0 -15px;
    .col-md-6{
      margin-bottom:30px;
    }
  }
`;


export default Home;
