import { tfn } from "@/utils/essentials";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Popup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered className="popup-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>Call Us for Best Deals!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p className="modal-text">
          Plan your dream vacation today. Contact us for exclusive offers and
          discounts!
        </p>
        <a href={tfn} className="theme-btn">
          Call Now
        </a>
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
