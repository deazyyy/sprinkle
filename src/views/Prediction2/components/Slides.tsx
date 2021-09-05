import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Locked from "../../../assets/Icons/Locked";
import LiveIcon from "../../../assets/Icons/LiveIcon";


interface CardValueProps {
  colorvalue?: string,
  status?: string,
} 
const Slides: React.FC<CardValueProps> = ({colorvalue ,status})=>  {
  const [value1, setValue1] = useState(0);
  function onSliderChange(value:Number) {
    console.log(value);
  };
  return (
    <Div className={`${colorvalue}  wow fadeInDown`}>
      <div className={`rangeheader ${status}`}>
        <div>
          {status=="active"?<LiveIcon/>:<Locked/>} Live
        </div>
        #44
      </div>
      <div className="slidecard">
        <div className="myrange">
            <div className="values"  style={colorvalue == "green" ? {color:"#56C474"} : {color:"#8DB9DF"}}>
              <b>0X</b>  Payout
            </div>
            <div className="middle">
              <div className="tparrow">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="whitearrow">
                  <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill="#fff"/>
                </svg>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"  className="coloredarrow">
                  <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill={colorvalue == "green" ? "#56C474" : "#8DB9DF"}/>
                </svg>

              </div>
              <div className="middleouter"><div className="middleinner"></div></div>
              <div className="btmarrow">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="whitearrow">
                  <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill="#fff"/>
                </svg>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"  className="coloredarrow">
                  <path d="M5.33314 0.278508C5.70005 -0.0928341 6.29897 -0.092835 6.66588 0.278507L11.7264 5.40018C12.3124 5.9932 11.893 7 11.0601 7L0.938958 7C0.105999 7 -0.313359 5.9932 0.272589 5.40018L5.33314 0.278508Z" fill={colorvalue == "red" ? "#FF678C" : "#8DB9DF"}/>
                </svg>
              </div>
            </div>
            <div className="values"  style={colorvalue == "red" ? {color:"#FF678C"} : {color:"#8DB9DF"}}>
              <b>1X</b>  Payout
            </div>
        </div>
        {
          colorvalue!="neutral"?
            <div className="slider">
              <div className="header">
                <div>
                  <h3>Closed Price</h3>
                  <h2>$564.345</h2>
                </div>
                <div className="pricelive">-$2.498</div>
              </div>
              <div className="body">
                <div className="mrow">
                  <h4>Locked Price: </h4>
                  <div>$543.56</div>
                </div>
                <div className="mrow">
                  <h4>Prize Pool</h4>
                  <div>0.00 BNB</div>
                </div>
              </div>
            </div>
            :
            <div className="slider">
            <div className="mrow">
              <b>Prize Pool:</b>
              <div>0 BNB</div>
            </div>
            <div className="btnouter">
              <button>Enter Up</button>
              <button>Enter Down</button>
            </div>
            </div>
        }
      </div>

    </Div>
  );
};

const Div = styled.div`

max-width:650px;
  min-width:300px;

  .rangeheader{
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:200px;
    width:90%;
    margin:auto;
    padding-bottom:10px;
    margin-bottom:16px;
    border-bottom:2px solid #DCE9F4;
    position:relative;
    svg{
      position:relative;
      top:-2px;
      margin-right:6px;
    }
    div{
      display:flex;
      align-items:center;
      color: #375976;
      font-weight:500;
      width: 50%;
      
    }
    &.active{
      div{
        &::before {
          content: "";
          position:absolute;
          height: 2px;
          width: 50%;
          bottom: -2px;
          left:0;
          background: #FDC719;
          z-index: 1;
        }
      }
    }
  }

.slidecard{
  position:relative;
  
  
  .myrange{
    background: #F2F6FA;
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
      color: #8DB9DF;
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
        padding:10px 0;
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
    background:#fff;
    border-radius: 10px;
    overflow:hidden;
    position:absolute;
    top:90px;
    // display:none;
    left:50%;
    transform:translateX(-50%);
    width: 100%;
    padding:24px;
    max-width:340px;
    
    .header{
      display:flex;
      justify-content:space-between;

      h3{
        color: #56C474;
        font-size:16px;
        font-weight:500;
        margin-bottom:14px;
      }
      h2{
        color: #375976;
        font-size:22px;
      }
      .pricelive{
        background:rgba(86, 196, 116, 0.1);
        color: #56C474;
        height:fit-content;
        border-radius: 7px;
        padding: 10px 16px;
        font-size:15px;
      }
    }

    .body{
      background:#fff;
      margin-top:10px;
      .mrow{
        color: #375976;
        font-weight:500;  
        h4{
          color: #56C474;
          font-size:15px;
          font-weight:500
        }
        display:flex;
        justify-content:space-between;
      }
    }
  }

  
}
&.red{
  .myrange{
    background: #FBECF1;
    .middle{
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
    top:unset;
    bottom:90px;
    .header{
      h3{
        color: #FF678C;
      }
    }

    .body{
      .mrow{
        h4{
          color: #FF678C;
        }
      }

      .val{
        color: #375976;
      }
      

    }
    .pricelive{
      background:rgba(255, 103, 140, 0.1);
      color: #FF678C;
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
    
    .mrow{
      display:flex;
      justify-content:space-between;
      margin-bottom:10px;
      b{
        color: #375976;
        font-weight:600
      }
    }
    .btnouter{
      border-radius:8px;
      overflow:hidden;
      button{
        width:100%;
        border:0;
        border-radius:0;
        font-weight:600;
        &:nth-child(1){
          background:rgba(86, 196, 116, 0.11);
          color: #56C474;
          margin-bottom:4px;
        }
        &:nth-child(2){
          background:rgba(255, 103, 140, 0.1);
          color: #FF678C;
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  max-width:unset;
}
`;


export default Slides;
