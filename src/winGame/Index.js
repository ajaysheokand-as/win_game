import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Button } from "reactstrap";
import Countdown from 'react-countdown';
import 'react-toastify/dist/ReactToastify.css';
import { NotifySwal } from "../notification/NotifySwal";
export const Index = () => {
  const [modal, setModal] = useState({
    status:false,
    modalNote:"",
    locked:false
  });
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState(10);
  const [selectedNumber, setSelectedNumber] = useState();
  const [lotteryNumber, setLotteryNumber] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const handleRecharge = () => {
    setBalance(balance + 100);
  };

  const handleModel = () => {
    setModal((prev)=>({...prev,status:!prev.status}));
  };

  const handleNumberSelection = (number) => {
    setAmount(10);
    setSelectedNumber(number);
    handleModel();
  };

  const confirmOrder = () => {
  fetch(`http://localhost\\Backend\\api_win_game\\orders\\orders.php`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
            "user_id" : "111",
            "period_no" : "111",
            "number" : selectedNumber,
            "amount" : amount 
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setShowAlert(true);

        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirm = () => {
    if (amount > balance) {
      // setModalNote("Insufcient Balance Add Money");
    } else {
      setBalance(balance - amount);
      confirmOrder();
      setModal(false);
    }
  };


  useEffect(() => {
    if (amount <= 10) {
      setAmount(10);
    } else if (amount >= 10000) {
      setAmount(10000);
    }
  }, [amount]);

  return (
    <div className="container">
      <Card className="mt-5">
        
       {showAlert && NotifySwal("Success")}
        <CardBody className="overflow-hidden ">
          <Row className="align-items-center justify-content-between">
            <CardTitle tag="h5" className="text-center txt-lg-center p-2">
              Avilable Balance : {balance}
            </CardTitle>
          </Row>
          <Row xs="4" className="align-items-center justify-content-between">
            <Button
              className="m-2"
              block
              color="success"
              onClick={handleRecharge}
            >
              Recharge
            </Button>

            <Button className="m-2" block color="primary">
              Rule's
            </Button>

            <Button className="m-2" block color="secondary">
              Recorde
            </Button>
          </Row>
        </CardBody>
      </Card>

      <Modal isOpen={modal.status} toggle={true}>
        <ModalHeader>Join Contest</ModalHeader>
        <ModalBody className="align-items-center justify-content-between">
          <CardTitle className="text-center p-2">
            You Select:
            {selectedNumber === 10
              ? "Green"
              : selectedNumber === 11
              ? "Blue"
              : selectedNumber === 12
              ? "Red"
              : selectedNumber}
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

      <Card className="mt-5">
        <CardBody className="overflow-hidden ">
          <Row className=" justify-content-between">
            <Col>
              <CardTitle tag="h5" className="text-left p-2">
                Period : 0
              </CardTitle>
            </Col>
            <Col>
              {lotteryNumber && <span>Lottery Number : {lotteryNumber}</span>}
            </Col>
            <Col>
              <CardTitle tag="h5" className="text-right p-2">
                Count Down :
                <span className="text text-success">
                  <Countdown autoStart={true} date={Date.now() + 150000} />
                </span>
              </CardTitle>
            </Col>
          </Row>

          <Row xs="6" className="align-items-center justify-content-between ">
            <Button
              className="m-2"
              color="success"
              block
              onClick={() => handleNumberSelection(10)}
            >
              Join Green
            </Button>

            <Button
              className="m-2"
              color="primary"
              block
              onClick={() => handleNumberSelection(11)}
            >
              Join Blue
            </Button>

            <Button
              className="m-2"
              color="danger"
              block
              onClick={() => handleNumberSelection(12)}
            >
              Join Red
            </Button>
          </Row>
          <Row xs="6" className="justify-content-md-center">
            <Button
              className="m-2"
              onClick={() => handleNumberSelection(0)}
              color="success"
              block
            >
              0
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(1)}
              color="primary"
              block
            >
              1
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(2)}
              color="danger"
              block
            >
              2
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(3)}
              color="primary"
              block
            >
              3
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(4)}
              color="danger"
              block
            >
              4
            </Button>
          </Row>
          <Row xs="6" className="justify-content-md-center">
            <Button
              className="m-2"
              onClick={() => handleNumberSelection(5)}
              color="success"
              block
            >
              5
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(6)}
              color="primary"
              block
            >
              6
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(7)}
              color="danger"
              block
            >
              7
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(8)}
              color="primary"
              block
            >
              8
            </Button>

            <Button
              className="m-2"
              onClick={() => handleNumberSelection(9)}
              color="danger"
              block
            >
              9
            </Button>
          </Row>
        </CardBody>
      </Card>
      
    </div>
  );
};
