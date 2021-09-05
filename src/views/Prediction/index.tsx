import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Slides from "./components/Slides";
import Predict from "../../assets/Icons/Slug/Predict";

const Prediction: React.FC = () => {
  return (
    <Div>
      <div className="sectionnav">
        <div className="navslug"><Predict/> Predictions</div>
      </div>
     <div className="slidesOuter">
     <Slides colorvalue="green"/>
      <Slides colorvalue="red"/>
      <Slides colorvalue="neutral"/>
     </div>
      
    </Div>
  );
};

const Div = styled.section`
   .sectionnav{
     margin-bottom:50px;
   }
    .slidesOuter{
      display:flex;
      justify-content:space-between;
      flex-flow: wrap;
    }

    @media screen and (max-width: 1300px) {
      min-width:270px !important;
    }
    @media screen and (max-width: 700px) {
     
      .slidesOuter{
        justify-content:center;
      }
    }

`;


export default Prediction;
