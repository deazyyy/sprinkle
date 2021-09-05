import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ArrowDown from "../../../assets/Icons/ArrowDown";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


interface CardValueProps {
  colorvalue?: string,
} 
const Slides: React.FC<CardValueProps> = ({colorvalue })=>  {
  const [value1, setValue1] = useState(0);
  return (
    <Div className={` slidecard ${colorvalue}  wow fadeInDown`}>
      <div className="myrange">
          <div className="values">
            <b>0X</b>  Payout
          </div>
          <div className="middle">
            <div className="tparrow">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="whitearrow">
                <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill="#fff"/>
              </svg>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"  className="coloredarrow">
                <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill="#56C474"/>
              </svg>

            </div>
            <div className="middleouter"><div className="middleinner"></div></div>
            <div className="btmarrow">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="whitearrow">
                <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill="#fff"/>
              </svg>
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"  className="coloredarrow">
                <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill="#56C474"/>
              </svg>
            </div>
          </div>
          <div className="values">
            <b>1X</b>  Payout
          </div>
      </div>
      {
        colorvalue!="neutral"?
          <div className="slider">
            <div className="header">
              <h3>Stake LP Tokens</h3>
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




&.slidecard{
  position:relative;
  max-width:650px;
  min-width:300px;
  margin:0 10px;
  .myrange{
    background: rgba(86, 196, 116, 0.1);
    border-radius: 10px;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:16px;
    height: 436px;
    max-width:200px;
    width:90%;
    margin:auto;
    .values{
      color: #56C474;
    }
    .middle{
      .tparrow{
        position:relative;
        .whitearrow{
          transform:scale(2.2);
        }
        .coloredarrow{
          position:absolute;
          left: 50%;
          top: 10px;
          transform: translateX(-50%);
        }
      }
      .btmarrow{
        position:relative;
        transform:rotate(180deg);
        .whitearrow{
          transform:scale(2.2);
        }
        .coloredarrow{
          position:absolute;
          left: 50%;
          top: 10px;
          transform: translateX(-50%);
        }
      }
      .middleouter{
        margin:10px 0;
        height:273px;
        background:rgba(86, 196, 116, 0.15);
        width:16px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:6px 0;
        border-radius:4px;
        .middleinner{
          background:rgba(86, 196, 116, 1);
          width:3px;
          height:100%;
          border-radius:100px;
          overflow:hidden;
        }
      }
    }
  }
  .slider{
    border: 1px solid rgba(86, 196, 116, 0.3);
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(93, 130, 163, 0.05), 3px 10px 19px rgba(93, 130, 163, 0.05);
    border-radius: 10px;
    overflow:hidden;
    position:absolute;
    bottom:14px;
    // display:none;
    left:50%;
    transform:translateX(-50%);
    width: 100%;
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
      h3{
        color: #2C7541;
        font-size:18px;
        background:#EFFAF2;
        padding:16px 14px;
        text-align:center;
        margin:0
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


export default Slides;
