import React, { useState } from 'react';
import {
    CardTitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "reactstrap";

export const CommonModal = (props) => {
    const [amount, setAmount] = useState(10);
    const [showModal, setShowModal] = useState(props.showModal || false);
  return (
    <div>
        <Modal isOpen={showModal} toggle={true}>
        <ModalHeader>{props.title || "Title"}</ModalHeader>
        <ModalBody className="align-items-center justify-content-between">
          <CardTitle className="text-center p-2">
            {props.subTitle || "Sub Title"}
          </CardTitle>
          <div className='align-items-center justify-content-between'>
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
          </div>
          <h5>
            Contract Money: <strong>{amount}</strong>
          </h5>

          <div className='align-items-center justify-content-between'>
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
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={setShowModal(false)}>
            Cancel
          </Button>
          <Button color="secondary" onClick={props.handleConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
