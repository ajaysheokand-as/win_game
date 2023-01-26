import React, { useState } from 'react';
import {
    CardTitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "reactstrap";

export const OrderModal = (props) => {
    const amount =100;
    const [showModal, setShowModal] = useState(true);
    const handleModel = () => {
        setShowModal(false);
      };

      const confirmOrder = () => {
        fetch(`http://localhost/Backend/api_win_game/orders/orders.php`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify({
                  "user_id" : "191",
                  "period_no" : "191",
                  "number" : props.selectedNumber,
                  "amount" : amount 
            }),
          })
            .then((response) => response.json())
            .then((response) => {
            //   setShowAlert(true);
      
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        };

      const handleConfirm = () => {
          confirmOrder();
          setShowModal(false);
      }
  return (
    <div>
        <Modal isOpen={showModal} toggle={true}>
        <ModalHeader>Join Contest</ModalHeader>
        <ModalBody className="align-items-center justify-content-between">
          <CardTitle className="text-center p-2">
            You Select:
            {props.selectedNumber === 10
              ? "Green"
              : props.selectedNumber === 11
              ? "Blue"
              : props.selectedNumber === 12
              ? "Red"
              : props.selectedNumber}
          </CardTitle>

          <div
            className="btn btn-sm btn-success m-2"
            onClick={() => setAmount(amount + 10)}
          >
            + 10
          </div>
          <div
            className="btn btn-sm btn-success m-2"
            onClick={() => setAmount(amount + 100)}
          >
            + 100
          </div>
          <div
            className="btn btn-sm btn-success m-2"
            onClick={() => setAmount(amount + 1000)}
          >
            + 1000
          </div>
          <h5>
            Contract Money: <strong>{amount}</strong>
          </h5>
          <div
            className="btn btn-sm btn-warning m-2"
            onClick={() => setAmount(amount - 10)}
          >
            - 10
          </div>
          <div
            className="btn btn-sm btn-warning m-2"
            onClick={() => setAmount(amount - 100)}
          >
            - 100
          </div>
          <div
            className="btn btn-sm btn-warning m-2"
            onClick={() => setAmount(amount - 1000)}
          >
            - 1000
          </div>
          {/* {modalNote && <div className="text text-warning"> {modalNote}</div>} */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleModel}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
