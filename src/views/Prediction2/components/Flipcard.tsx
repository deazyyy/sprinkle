import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";
import Slides from "./Slides";

interface CardValueProps {
  colorvalue?: string,
  status?: string,
} 
const FlipCard: React.FC<CardValueProps> = ({colorvalue ,status})=>  {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal"  >
            <Slides colorvalue={colorvalue} status={status} />
            <Slides colorvalue="neutral"/>
      </ReactCardFlip>
  </div>
  );
};


export default FlipCard;
