import React, { useEffect, useState } from "react";
import {
  Button,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Moment from "moment";
import Countdown from "react-countdown";
import SweetAlert from 'react-bootstrap-sweetalert';
import './Order.css';

export const Order = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [lotteryNumber, setLotteryNumber] = useState();
  const [amount, setAmount] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, SetTimeLeft] = useState();
  const handleModel = () => {
    setShowModal(!showModal);
  };

  const confirmOrder = async () => {
    let rwe
    await fetch(`http://localhost\\Backend\\api_win_game\\orders\\orders.php`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: "1100",
        period_no: "111",
        number: selectedNumber,
        amount: amount,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        //   setShowAlert(true);
        if(!response?.success ){
          console.log(response);
          rwe = (<SweetAlert success title="Good job!" onConfirm={()=>{console.log("Comfirmed")}} onCancel={()=>{console.log("Comfirmed")}}>
          You clicked the button!
        </SweetAlert>);
        return rwe;
        }

      })
      .catch((err) => {
        console.log(err);
      });
      console.log(rwe,"tha i rwe")
      return rwe
  };

  const handleConfirm = async () => {
    // if (amount > balance) {
    //   setModalNote("Insufcient Balance Add Money");
    // } else {
    //   setBalance(balance - amount);
    setShowModal(false);
    let newqw =  await confirmOrder()
    console.log(newqw,"thia ia newqw 67")
    return newqw;
    // }
  };

  const handleNumberSelection = (number) => {
    setAmount(10);
    setSelectedNumber(number);
    setShowModal(true);
  };
  useEffect(() => {
    if (amount <= 10) {
      setAmount(10);
    } else if (amount >= 10000) {
      setAmount(10000);
    }
  }, [amount]);

  fetch(`http://localhost\\Backend\\api_win_game\\timer\\timer.php`,{
    method: "GET",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  })

  useEffect(() => {
    let interval = setInterval(() => {
       fetch(`http://localhost\\Backend\\api_win_game\\timer\\response.php`,{
        method: "GET",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
            },
      }).then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Error",err);
      });
    }, 2000000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div>
        {}
      {/* <SweetAlert success title="Good job!" onConfirm={()=>{console.log("Comfirmed")}} onCancel={()=>{console.log("Comfirmed")}}>
          You clicked the button!
        </SweetAlert> */}
        <Modal isOpen={showModal} toggle={true}>
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
      </div>
      <Row className=" justify-content-between">
        <Col>
          <CardTitle tag="h5" className="text-left p-2">
            Period : {Moment().format("DDMMYYYY") + "101"}
          </CardTitle>
        </Col>
        <Col>
          {lotteryNumber && <span>Lottery Number : {lotteryNumber}</span>}
        </Col>
        <Col>
          <CardTitle tag="h5" className="text-right p-2">
            Count Down :
            <span className="text text-success">
              {timeLeft}
            </span>
          </CardTitle>
        </Col>
      </Row>
      <Row xs={4} className="justify-content-between">
        <Button
          className="m-2"
          color="success"
          block
          onClick={() => handleNumberSelection(10)}
        >
          Green
        </Button>

        <Button
          className="m-2 btn-blue"
          color="primary"
          block
          onClick={() => handleNumberSelection(11)}
        >
          Blue
        </Button>

        <Button
          className="m-2"
          color="danger"
          block
          onClick={() => handleNumberSelection(12)}
        >
          Red
        </Button>
      </Row>
      <Row xs="6" className="justify-content-center">
        <Button
          className="m-1 buttonDoubleGradientRed"
          onClick={() => handleNumberSelection(0)}
          color="success"
          block
        >
          0
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(1)}
          color="primary"
          block
        >
          1
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(2)}
          color="danger"
          block
        >
          2
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(3)}
          color="primary"
          block
        >
          3
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(4)}
          color="danger"
          block
        >
          4
        </Button>
      </Row>
      <Row xs="6" className="justify-content-center">
        <Button
          className="m-1 buttonDoubleGradientBlue"
          onClick={() => handleNumberSelection(5)}
          color="primary"
          block
        >
          5
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(6)}
          color="danger"
          block
        >
          6
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(7)}
          color="primary"
          block
        >
          7
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(8)}
          color="danger"
          block
        >
          8
        </Button>

        <Button
          className="m-1"
          onClick={() => handleNumberSelection(9)}
          color="primary"
          block
        >
          9
        </Button>
      </Row>
    </div>
  );
};
