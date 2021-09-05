import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import Card from "./components/Card";
import CardFarm from "./components/CardFarm";
import SectionNav from "./components/SectionNav";

interface FarmsProps{
  tokenMode?: boolean
}
const Pool: React.FC<FarmsProps> = (farmsProps) => {
  const {tokenMode} = farmsProps;
  return (
    <Div>
      <SectionNav tokenMode={tokenMode}/> 
      {
        tokenMode?
          <div className="row">
            <CardFarm/>
              <CardFarm />
              <CardFarm />
              <CardFarm />
              <CardFarm />
              <CardFarm/>
              <CardFarm />
              <CardFarm />
              <CardFarm />
              <CardFarm />
              <CardFarm/>
              <CardFarm />
              <CardFarm />
              <CardFarm />
              <CardFarm />      
          </div>
          :
          <div className="row">
            <Card/>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card/>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card/>
              <Card />
              <Card />
              <Card />
              <Card />     
          </div>
      }
      
      
    </Div>
  );
};

const Div = styled.section`
  .row{
    .col-md-4{
      &.nth-child(1){
        .poolcard{
          margin-right:auto !important;
        }
      }
    }
  }
`;


export default Pool;
