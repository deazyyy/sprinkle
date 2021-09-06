import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import FlipCard from "./components/Flipcard";
import Predict from "../../assets/Icons/Slug/Predict";
import Slider from "react-slick";
import Timer from "../../assets/Icons/Timer";
import Bnb from "../../assets/Icons/Bnb";
import Arrow from "../../assets/Icons/DropdownArrow";
import ReactCardFlip from "react-card-flip";
const Prediction2: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isup, setIsup] = useState(true);
  const slider = useRef(null);
  
  var settings = {
    autoplay: false,
    infinite: false,
    dots: false,
    draggable:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3 ,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  function next(){
    if(slider)
    // @ts-ignore
      slider.current.slickNext()
  }
  function prev(){
    if(slider)
    // @ts-ignore
      slider.current.slickPrev()
  }
  return (
    <Div>
      {/* <SectionNav/>  */}
      <div className="sectionnav">
        <div className="navslug"><Predict/> Predictions</div>
        <div className="middlenav">
          <div className="arrleft" onClick={()=>prev()}><Arrow/></div>
           <img src="images/slider.png"  alt="Slider" />
           <div className="arrright" onClick={()=>next()}><Arrow/></div>
        </div> 
        <div className="right">
          <div className="amt"><Bnb />  $34.567</div>
          <div className="timer">
            <div className="runtime">02:45</div>
            <div className="time">
              5<span>m</span>
            </div>
            <Timer/>
          </div>
        </div>
      </div>
      <Slider ref={slider}  {...settings} className="wow fadeInDown" data-wow-duration="0.9s" data-wow-delay="1s">
          <div>
            <FlipCard colorvalue="green" />
          </div>
          <div>
            <FlipCard colorvalue="red" />
          </div>
          <div>
            <FlipCard colorvalue="green"  status="active"/>
          </div>
          <div>
            <FlipCard colorvalue="red" status="active"/>
          </div>
          <div>
            <FlipCard colorvalue="green" />
          </div>
          <div>
            <FlipCard colorvalue="red" />
          </div>
          <div>
            <FlipCard colorvalue="green" status="active"/>
          </div>
      </Slider>
      
      
    </Div>
  );
};

const Div = styled.section`
.slick-list{
  overflow:hidden;
}
.sectionnav{
  margin-bottom:50px;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
 .slidesOuter{
   display:flex;
   justify-content:space-between;
 }
 .middlenav{
  display:flex;
  align-items:center;
  background:rgba(141, 185, 223, 0);
  border-radius: 7px;
  padding:10px;
  justify-content:space-between;
  position:relative;
  width:160px;
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  img{
    height:100%;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%)scale(1.3);
  }
   .arrleft{
     cursor:pointer;
     svg{
        transform:rotate(90deg);
     }
     transition:all 0.3s ease;
     transform:scale(1.3);
     &:hover{
       transform:scale(1.7)
     }
   }
   .arrright{
    cursor:pointer;
    svg{
       transform:rotate(-90deg);
    }
    transition:all 0.3s ease;
    transform:scale(1.3);
    &:hover{
      transform:scale(1.7)
    }
  }
 }
 .right{
  display:flex;
  .amt{
    border: 1px solid rgba(141, 185, 223, 0.2);
    border-radius: 7px;
    padding:6px 10px;
    color: #375976;
    font-weight:600;
    svg{
      path{
        fill:#8DB9DF !important
      }
    }
  }
  .timer{
    border-radius: 7px;
    background:rgba(141, 185, 223, 0.1); 
    display:flex;
    align-items:center; 
    margin-left:14px;
    padding:6px 12px;
    font-weight:600;
    .runtime{
      color: #375976;
    }
    .time{
      color:rgba(55, 89, 118, 0.6);
      margin:0 6px;
      font-size:14px;
    }
  }
 }

 @media screen and (max-width: 800px) {
   .sectionnav{
     margin-bottom:180px;
   }
   .middlenav{
     top:80px
   }
}
@media screen and (max-width: 500px) {
  .sectionnav{
    margin-bottom:140px;
    flex-direction:column;
  }
  .middlenav{
    top:120px
  }
  .right{
   margin:14px 0;
  }
}
`;


export default Prediction2;
