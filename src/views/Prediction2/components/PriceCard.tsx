import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ArrowDown from "../../../assets/Icons/ArrowDown";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


interface CardValueProps {
  colorvalue?: string,
  setIsFlipped: (value: boolean | ((prevVar: boolean) => boolean)) => void;
} 
const PriceCard: React.FC<CardValueProps> = ({colorvalue,setIsFlipped })=>  {
  const [value1, setValue1] = useState(0);
  return (
    <Div className={` slidepricecard ${colorvalue}`}>
      {
        colorvalue!="neutral"?
          <div className="slider">
            <div className="header">
              <h3>Stake LP Tokens <i  onClick={()=>setIsFlipped(false)} className="fas fa-close"></i></h3>
              
            </div>
            <div className="body">
              <div className="mrow">
                <h4>Stake</h4>
                <div>BNB</div>
              </div>
              <input type="text" placeholder="0.000"/>
              <div className="bal">Balance : 0.000</div>
              {/* @ts-ignore */}
              <Slider settings={{
                      start: value1,
                      min: 0,
                      max: 100,
                      step: 1,                      
                    }} 
                    onChange={(e:any) => setValue1(e)} 
                  />
                    <div className="val">{value1}%</div>
              <button>
                Enable
              </button>
            </div>
          </div>
          :
          <div className="slider">
            <div className="timer">
                    <div>Entry Starts</div>
                    <h4>~07:45</h4>
            </div>
          </div>
      }

    </Div>
  );
};

const Div = styled.div`




&.slidepricecard{
  position:relative;
  max-width:650px;
  min-width:300px;
  margin:0 10px;
  .slider{
    border: 1px solid rgba(86, 196, 116, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(93, 130, 163, 0.05), 3px 10px 19px rgba(93, 130, 163, 0.05);
    border-radius: 10px;
    overflow:hidden;
    width: 100%;
    padding:0 !important;
    .rc-slider-handle{
      border: 1px solid #56C474;
      width: 24px;
      height: 24px;
      margin-top: -9px;
    }
    .rc-slider-track{
      background: #56C474;
      height: 7px;
    }
    .rc-slider-rail{
      background:rgba(86, 196, 116,0.2);
      height: 7px;
    }
    .header{
      position:relative;
      .fa-close{
        color: #2C7541;
        cursor:pointer;
        position:absolute;
        top:18px;
        right:20px;
      }
      h3{
        color: #2C7541;
        font-size:17px;
        background:#EFFAF2;
        padding:16px 14px;
        text-align:center;
        margin:0;
        width:100%;    
        font-weight:600;   
      }
    }

    .body{
      background:#fff;
      padding:14px 20px;
      .mrow{
        color: #375976;
        font-weight:600;  
        h4{
          color: #2C7541;
          font-size:16px;
          font-weight:600
        }
        display:flex;
        justify-content:space-between;
      }
      .bal{
        margin-bottom:12px;
      }
      .val{
        color: #375976;
        font-weight:700;
        text-align:Center;
        margin-top:10px;
        margin-bottom:20px
      }

      input{
        width:100%;
        border: 1px solid rgba(86, 196, 116, 0.2);
        color:rgba(0, 0, 0, 0.7);
        border-radius:10px;
        font-size:20px;
        padding:10px 16px;
        font-weight:700;
        margin:14px 0;
        &:focus{
          outline:none;
        }
      }
      button{
        width:100%;
        background: #56C474;
        font-weight:600;
      }
    }
  }

  &.red{
    .myrange{
      background: #FBECF1;
      .values{
        color: #FF678C;
      }
      .middle{
        .tparrow{
          .coloredarrow{
            path{
              fill:rgba(255, 103, 140, 1) !important;
            }
          }
        }
        .btmarrow{
          .coloredarrow{
            path{
              fill:rgba(255, 103, 140, 1) !important;
            }
          }
        }
        .middleouter{
          background:rgba(255, 103, 140, 0.15);
          .middleinner{
            background:rgba(255, 103, 140, 1);
          }
        }
      }
    }
    .slider{
      border: 1px solid #FFD2DD;
      bottom:unset;
      top:14px;
      .rc-slider-handle{
        border: 1px solid #FF678C;
      }
      .rc-slider-track{
        background: #FF678C;
      }
      .rc-slider-rail{
        background:rgba(255, 103, 140, 0.2);
      }
      .header{
        .fa-close{
          color: #7C2E41;
        }
        h3{
          color: #7C2E41;
          background:#FFF0F4;
        }
      }
  
      .body{
        .mrow{
          h4{
            color: #7C2E41;
          }
        }

        .val{
          color: #375976;
        }
        input{
          border: 1px solid #FFE1E8;
        }
        button{
          background: #FF678C;
        }
      }
    }
  }

  &.neutral{
    .myrange{
      background: #F2F6FB;
      .values{
        color: #CADEF0;
      }
      .middle{
        .tparrow, .btmarrow{
          .coloredarrow{
            path{
              fill:#CADEF0 !important;
            }
          }
        }
        .middleouter{
          background:#EAF1F9;
          .middleinner{
            background:#CADEF0;
          }
        }
      }
    }
    .slider{
      border: 1px solid rgba(141, 185, 223, 0.2);
      background:#fff;
      bottom:unset;
      top:50%;
      transform:translate(-50%,-50%);
      box-shadow: 0px 0px 6px rgba(93, 130, 163, 0.05), 3px 10px 19px rgba(93, 130, 163, 0.05);
      padding:45px 30px;
      text-align:center;
      .timer{
        h4{
          margin:6px 0 0;
          color: #375976;

        }
      }
    }
  }
}


@media screen and (max-width: 1300px) {
  min-width:270px !important;
  margin-bottom:30px !important;
}

`;


export default PriceCard;
