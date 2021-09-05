import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Search from "../../../assets/Icons/Search";
import DropdownArrow from "../../../assets/Icons/DropdownArrow";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Pool from "../../../assets/Icons/Slug/Pool";
import Farm from "../../../assets/Icons/Slug/Farm";

interface NavProps{
  tokenMode?: boolean
}
const SectionNav: React.FC<NavProps> = (navProps) => {
  const {tokenMode} = navProps;
  const [toggle, setToggle] = useState(false);
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const arrowClosed = (
    <span>
      <DropdownArrow />
    </span>
  );
  const arrowOpen = (
    <span className="arrow-open">
      <DropdownArrow />
    </span>
  );
  return (
    <Div className="sectionnav">
        {tokenMode? <div className="navslug"><Farm /> Farm</div>: <div className="navslug"><Pool /> Pool</div>}
        
      <div className="right">
        <div className="toggle">
          <label className="switch">
            <input type="checkbox" /> <div />
          </label>
          <span className="color-d">Staked Only</span>
        </div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#home">
              Live
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#menu1">
              Finished
            </a>
          </li>
        </ul>
        <div className="seldropdown">
          <span>Sort By:</span>
          <Dropdown
            arrowClosed={arrowClosed}
            arrowOpen={arrowOpen}
            options={options}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>

        <div className="searchbx">
          <input placeholder="Search" />
          <Search />
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  &.sectionnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -14px;
    margin-bottom: 40px;
    .right{
      display: flex;
      // justify-content: space-between;
      align-items: center;
    }
    .switch input {
      position: absolute;
      opacity: 0;
    }
    label {
      margin: 0;
      margin-right: 10px;
    }

    .switch {
      display: inline-block;
      font-size: 20px; /* 1 */
      height: 14px;
      width: 2em;
      background: #e6eff7;
      border-radius: 1em;
      cursor: pointer;
    }

    .switch div {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: #8db9df;
      transition: all 300ms;
      transform: translateY(-3px);
    }

    .switch input:checked + div {
      transform: translate3d(100%, 0, 0) translateY(-3px);
    }

    .toggle {
      display: flex;
      align-items: center;
      span {
        font-size: 15px;
        font-weight: 500;
      }
    }

    .nav {
      border: 1px solid rgba(141, 185, 223, 0.2);
      border-radius: 7px;
      margin: 0 24px;
      .nav-link {
        color: #8db9df;
        font-size: 15px;
        height: 44px;
        display: flex;
        align-items: center;
        padding: 5px 24px;
        &.active {
          background: #8db9df;
          border-radius: 7px;
          color: #fff;
        }
      }
    }

    .seldropdown {
      border: 1px solid rgba(141, 185, 223, 0.2);
      border-radius: 7px;
      padding: 10px 14px;
      font-size: 15px;
      margin-right: 24px;
      display: flex;
      align-items: center;
      .Dropdown-option {
        text-transform: capitalize;
      }
      .Dropdown-control {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        background-color: transparent;
        border: 0;
        min-width: 100px;
        color: #375976;
        font-weight: 600;
        text-transform: capitalize;
        .Dropdown-arrow-wrapper {
          .arrow-open {
            svg {
              transform: rotate(-180deg);
            }
          }
        }
      }
      span {
        color: #8db9df;
        margin-right: 8px;
      }
    }
    .searchbx {
      border: 1px solid rgba(141, 185, 223, 0.2);
      border-radius: 7px;
      padding: 10px 14px;
      font-size: 15px;
      position: relative;
      input {
        color: #375976;
        background: transparent;
        width: 100%;
        border: 0 !important;
        outline: 0 !important;
        padding-right: 28px;
        &::placeholder {
          color: rgba(141, 185, 223, 0.5);
        }
      }
      svg {
        position: absolute;
        right: 10px;
      }
    }
  }

  @media screen and (max-width: 1310px) {
    flex-direction:column;
    .navslug{
      margin-bottom:24px;
    }
    .right{
      flex-flow:wrap;
      justify-content: center;
      .toggle, .seldropdown, .searchbx, .nav{
        margin:10px;
      }
    }
  }
`;

export default SectionNav;
