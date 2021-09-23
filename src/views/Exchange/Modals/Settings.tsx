import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 'react-dropdown/style.css';
import Modal from 'react-modal';


interface CardValueProps {
  colorvalue?: string,
  status?: string,
} 
const { forwardRef, useRef, useImperativeHandle } = React;
const Settings: React.FC<CardValueProps> = forwardRef((props, ref) => {
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
  useImperativeHandle(ref, () => ({
      openModal: () => {
          setIsOpen(true)
      }
  }));
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  const [activenm, setActivenm] = useState("one");
  const [activespeed, setActivespeed] = useState("fast");
  function isActive(name: String) {
    return activenm == name || activespeed == name;
  }

  return (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Settings Modal"
          className="custommodal settingsmodal"
        >
          <div className="modalheader">
            <h3>Settings</h3>
            <i className="fas fa-times" onClick={closeModal}></i>
          </div>
          <div className="content">
            <div className="global">
              <h5 className="smallhead">GLOBAL</h5>
              <div className="mrowco">
                <h4>Default Transaction Speed(GWEI)</h4>
                <div className="mrowbtn">
                  <button className={isActive("stand") ? "active" : ``} onClick={() => setActivespeed("stand")}>Standard(5)</button>
                  <button className={isActive("fast") ? "active" : ``} onClick={() => setActivespeed("fast")}>Fast(5)</button>
                  <button className={isActive("inst") ? "active" : ``} onClick={() => setActivespeed("inst")}>Instant(5)</button>
                </div>
              </div>
            </div>

            <div className="swapnliq">
              <h5 className="smallhead">SWAPS & LIQUIDITY</h5>
              <div className="mrowco">
                <h4>Slippage Tolerance</h4>
                <div className="mrowbtn">
                  <button className={isActive("one") ? "active" : ``} onClick={() => setActivenm("one")} >0.1%</button>
                  <button className={isActive("two") ? "active" : ``} onClick={() => setActivenm("two")}>0.5%</button>
                  <button className={isActive("three") ? "active" : ``} onClick={() => setActivenm("three")}>1.0%</button>
                </div>
              </div>
              <div className="mrow dead">
                <h4>Tx deadline(mins</h4>
                <input type="text" placeholder="20" />
              </div>
              <div className="mrow">
                <h4>Expert mode</h4>
                <div className="toggle">
                  <label className="switch">
                    <input type="checkbox" /> <div />
                  </label>
                </div>
              </div>
              <div className="mrow">
                <h4>Disable Multihops</h4>
                <div className="toggle">
                  <label className="switch">
                    <input type="checkbox" /> <div />
                  </label>
                </div>
              </div>
              <div className="mrow">
                <h4>Flippy Sounds</h4>
                <div className="toggle">
                  <label className="switch">
                    <input type="checkbox" /> <div />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal>
  );
});



export default Settings;
