import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'react-dropdown/style.css';
import Modal from 'react-modal';


interface CardValueProps {
} 
const { forwardRef, useRef, useImperativeHandle } = React;
const SelectToken: React.FC<CardValueProps> = forwardRef((props, ref) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '0%',
      transform: 'translate(-50%, -50%)',
      maxWidth:"400px"
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  useImperativeHandle(ref, () => ({
      openModal: () => {
          setIsOpen(true)
      }
  }));
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Select Modal"
          className="custommodal selectmodal"
        >
          <div className="modalheader">
            <h3>Select a Token</h3>
            <i className="fas fa-times" onClick={closeModal}></i>
          </div>
          <div className="content">
            <input type="text" placeholder="Search name or paste address" />
            <div className="commonbases">
              <h5 className="smallhead">Common bases</h5>
              <div className="types">
                <div><img src="images/icon/bnb.png" alt="" /> BNB</div>
                <div><img src="images/icon/bnb.png" alt="" /> BNB</div>
                <div><img src="images/icon/bnb.png" alt="" /> BNB</div>
                <div><img src="images/icon/bnb.png" alt="" /> BNB</div>
              </div>

              <div className="list">
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
                <div className="mrow">
                  <img src="images/icon/bnb.png" alt="" />
                  <div>
                    <h5>BNB</h5>
                    <h6>BNB</h6>
                  </div>
                </div>
              </div>

              <div className="manage">
                Manage Tokens
              </div>
            </div>
          </div>
        </Modal>
  );
});

export default SelectToken;
