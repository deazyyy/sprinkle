import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Settings from "../../../assets/Icons/Settings";
import Timer from "../../../assets/Icons/Timer";
import DropdownArrow from "../../../assets/Icons/DropdownArrow";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SettingsModal from "../Modals/Settings"
import SelectToken from "../Modals/SelectToken"


interface CardValueProps {
  colorvalue?: string,
  status?: string,
} 
const LiquidityCard: React.FC<CardValueProps> = ({colorvalue ,status})=>  {
  const settingRef = useRef(null);
  const selectRef = useRef(null);
  const [value1, setValue1] = useState(0);
  function onSliderChange(value:Number) {
    console.log(value);
  };

  const options = [
    'BNB', 'BNB', 'BNB'
  ];
  const defaultOption = options[0];
  const arrowClosed = (
    <span ><DropdownArrow/></span>
  )
  const arrowOpen = (
    <span className="arrow-open" ><DropdownArrow/></span>
  )
  return (
    <Div className={`card`}>
      {/* @ts-ignore */}
      <SettingsModal ref={settingRef}/><SelectToken ref={selectRef}/>
      
      <div className="header">
        <div>
          <h3>Liquidity</h3>
          Remove liquidity to receive tokens back
        </div>
        <div className="ic-bx-outer">
           {/* @ts-ignore */}
           <span className="ic-bx mr-2" onClick={()=> settingRef.current.openModal()}><Settings/></span>
          <span className="ic-bx"><Timer/></span>
        </div>
      </div>
      <div className="body">
        No Liuidiity found.
        <h5>Dont see a pool you joined?</h5>
         {/* @ts-ignore */}
        <button onClick={()=> selectRef.current.openModal()}>Find other LP tokens</button>
      </div>
      <button className="respbtn">+ Add Liquidity</button>
    </Div>
  );
};

const Div = styled.div`
  width:90%;
  max-width:400px;
  min-height:410px;
  margin:auto;
  .header{
    display:flex;
    justify-content:space-between;
    font-size:14px;
    margin-bottom:36px;
    h3{
      color: #375976;
      font-size:20px;
      margin-bottom:6px;
    }
    .ic-bx-outer{
      display:flex;
      margin-left:10px;
    }
    .ic-bx{
      background:rgba(141, 185, 223, 0.1);
      border-radius: 7px;
      display:flex;
      justify-content:center;
      align-items:center;
      width:40px;
      height:40px;
      cursor:pointer;
    }
  }
  .body{
    font-size:13px;
    text-align:center;
    border-radius: 10px;
    background: rgba(141, 185, 223, 0.1);
    padding:26px;
    margin-bottom:20px;
    h5{
      color: #375976;
      font-size:14px;
      margin-bottom:26px;
    }
  }
  .respbtn{
    background: #46F6C2;
    color: #1C2E3F;
    font-weight:600;
    margin-top:auto;
  }
`;


export default LiquidityCard;
