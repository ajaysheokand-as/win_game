import React, { useState } from "react";
import {
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

export const RulesModal = (props) => {
  const [showModal, setShowModal] = useState(props);
  const handleModel = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Modal isOpen={showModal} >
        <ModalHeader>Join Contest</ModalHeader>
        <ModalBody className="align-items-center justify-content-between">
          <CardTitle className="text-center p-2">Rules:</CardTitle>
          <p>
            3 minutes 1 issue, 2 minutes and 30 seconds to order, 30 seconds to
            show the lottery result. It opens all day.
          </p>

          <p className="text-success">
            
            1.JOIN GREEN: if the result shows 0 or 5, you will get (100*4.5) 450.
            
            
          </p>
          <p className="text-primary">
            2.JOIN BLUE: if the result shows 1,3,7,9, you will get (100*2) 200
            If the result shows 5, you will get (98*1.5) 147.
          </p>
          <p className="text-danger">
            3.JOIN RED: if the result shows 2,4,6,8, you will get (100*2) 200; 
            If the result shows 0, you will get (100*1.5) 150.
          </p>
          
          <p>
            4.SELECT NUMBER: If the result is the same as the number you
            selected, you will get(100*9) 900.
          </p>
          
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleModel}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
