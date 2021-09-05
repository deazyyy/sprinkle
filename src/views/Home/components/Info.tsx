import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Info: React.FC = () => {
  return (
    <Div className="card">
      <h4 className="color-d">Loream ipsum is a simple text</h4>
      <div className="bx">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available. It is also used to
        temporarily
      </div>
    </Div>
  );
};

const Div = styled.section`
  text-align: center;
  height: 100%;
  h4 {
    margin-bottom: 20px;
  }
  .bx {
    margin: 8px auto;
    max-width:90%;
  }
`;

export default Info;
