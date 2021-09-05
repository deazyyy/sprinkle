// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const Footer: React.FC = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <Nav className="wow fadeInUp d-none" data-wow-duration="0.7s" data-wow-delay="0.5s">
        <div className="social">
              <i class="fab fa-facebook-f"></i>
              <i class="fas fa-envelope"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-whatsapp-square"></i>
        </div>
        <div className="copyright">Copyright 2021</div>
    </Nav>
  );
};


const Nav = styled.nav`
  display:flex;
  justify-content:center;
  padding:20px;
  border-top : 1px solid rgba(255,255,255,0.1);
  margin-top:60px;
  .social{
    display:flex;
    align-items:center;
    i{
      margin: 0 10px;
      color:#4C4C4C;
      transition:all 0.3s ease;
      cursor:pointer;
      &:hover{
        color:#fff;
      }
    }
  }
  .copyright{
    margin-left:18px;
    font-weight:300;
    font-size:14px;
  }
`;


export default Footer;
