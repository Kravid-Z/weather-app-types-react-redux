import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import { useState } from "react";

interface AlertProps {
  message: string;
  closeAlert: () => void;
  display: boolean
}

const Alert = ({ message, closeAlert, display }: AlertProps) => {
  const [showA, setShowA] = useState(display);

  //   const toggleShowA = () => setShowA(!showA);

  return (
    <>
      <Col xs={6}>
        <Toast
          show={showA}
          onClose={() => {
            setShowA(false);
            closeAlert();
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">ALERT</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
      {/* <Col xs={6}>
        <Button onClick={toggleShowA}>
          Toggle Toast <strong>with</strong> Animation
        </Button>
      </Col> */}
    </>
  );
};

export default Alert;

/* * import React, { FC } from 'react';

interface AlertProps {
  message: string;
  onClose: () => void
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  return(
    <div className="modal is-active has-text-centered">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-danger">
          <p className="modal-card-title has-text-white">{message}</p>
        </header>
        <footer className="modal-card-foot" style={{justifyContent: 'center'}}>
          <button className="button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}

export default Alert; */
