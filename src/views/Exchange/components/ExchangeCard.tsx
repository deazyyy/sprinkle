import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Settings from "../../../assets/Icons/Settings";
import Timer from "../../../assets/Icons/Timer";
import DropdownArrow from "../../../assets/Icons/DropdownArrow";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SettingsModal from "../Modals/Settings"


interface CardValueProps {
  colorvalue?: string,
  status?: string,
} 
const ExchangeCard: React.FC<CardValueProps> = ({colorvalue ,status})=>  {
  const settingRef = useRef(null);
  const [value1, setValue1] = useState(0);
  const [from, setFrom] = useState(1);
  const [toval, setToval] = useState(10);
  function onSliderChange(value:Number) {
    console.log(value);
  };
  // const options = [
  //   {
  //     id: 0,
  //     title: <img src="images/icons/bnb.png" width="64" height="64" alt="dining icon" />,
  //     selected: false,
  //     key: 'activityIcon'
  //   },
  //   {
  //     id: 1,
  //     title: 'Orange',
  //     selected: false,
  //     key: 'activityIcon'
  //   },
  //   {
  //     id: 2,
  //     title: 'Strawberry',
  //     selected: false,
  //     key: 'activityIcon'
  //   }
  // ]
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
      <SettingsModal ref={settingRef}/>
      <div className="header">
        <div>
          <h3>Exchange</h3>
          Trade tokens in an instant
        </div>
        <div className="ic-bx-outer">
           {/* @ts-ignore */}
          <span className="ic-bx mr-2" onClick={()=> settingRef.current.openModal()}><Settings/></span>
          <span className="ic-bx"><Timer/></span>
        </div>
      </div>
      <div className="body">
        <div className="inputbx ">
          <div className="mrowtop">
            <small>From</small>
            <small>Balance : 0.19683</small>
          </div>
          <div className="mrow ">
            <input type="text" placeholder="0.00" value={from}/>
            <div className="selcrow">
              <button onClick={() => setFrom(100)}>MAX</button>
              <Dropdown 
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
                  options={options} 
                value={defaultOption} 
                placeholder="Select an option" />
            </div>
          </div>
        </div>
        <br/>
        <div className="inputbx mt-4">
          <div className="mrowtop">
            <small>To</small>
            <small>Balance : 0.19683</small>
          </div>
          <div className="mrow">
            <input type="text" placeholder="0.00" value={toval}/>
            <div className="selcrow">
              <button onClick={() => setToval(10)}>MAX</button>
              <Dropdown 
                arrowClosed={arrowClosed}
                arrowOpen={arrowOpen}
                  options={options} 
                value={defaultOption} 
                placeholder="Select an option" />
            </div>
          </div>
        </div>
      </div>
      <button className="respbtn">Swap</button>
    </Div>
  );
};

const Div = styled.div`
  width:90%;
  max-width:400px;
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
    .inputbx{
      background:rgba(141, 185, 223, 0.1);
      border-radius: 10px;
      padding:8px 10px;
      .selcrow{
        display:flex;
        align-items:center;
        button{
          min-width:unset;
          background:transparent;
          color:#375976;
          font-size:12px;
          font-weight:600;
          border:0 !important;
          // padding:0;
          transform:Scale(1) !important
        }
      }
      .mrowtop{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:6px
      }
      .mrow{
        display:flex;
        justify-content:center;
        align-items:center;
        input{
          color: #375976;
          background:transparent;
          width:100%;
          border:0 !important;
          outline:0 !important;
          padding-right:28px;
          font-size:20px;
          font-weight:600;
          &::placeholder{
            color:#375976
          }
        }
        .Dropdown-option{
          text-transform: capitalize;
          font-size:13px;
        }
        .Dropdown-control{
          display: flex;
          align-items: center;
          justify-content:space-between;
          padding:6px 8px;
          background-color: transparent;
          border: 1px solid rgba(141, 185, 223, 0.3);
          border-radius: 7px;
          min-width: 100px;
          color: #375976;
          font-weight: 600;
          font-size:14px;
          text-transform: capitalize;
          .Dropdown-arrow-wrapper{
              .arrow-open{
                svg{
                  transform: rotate(-180deg);
                }
              }
          }
        }
      }
    }
  }
  .respbtn{
    background: #46F6C2;
    color: #1C2E3F;
    font-weight:600;
    margin-top:20px;
  }
`;


export default ExchangeCard;
