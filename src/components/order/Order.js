import React, { useEffect, useState } from "react";
import {
  Button,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Moment from "moment";
import Countdown from "react-countdown";
import './Order.css';
import swal from 'sweetalert';
import moment from "moment";


export const Order = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [amount, setAmount] = useState(10);
  const [game, setGame] = useState({});
  const [showModal, setShowModal] = useState(false);
  const endTime = moment(new Date())
    .add(2, 'minutes')

  const handleModel = () => {
    setShowModal(!showModal);
  };

  const confirmOrder = async () => {
    await fetch(`http://localhost/Backend/api_win_game/orders/orders.php`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: "5",
        period_no: "111",
        number: selectedNumber,
        amount: amount,
      }),
    })
      .then((response) => response.json())
      .then((response) => {

        if(!response?.success ){
          swal({
            title: "Error",
            text: response.error,
            icon: "warning",
            button: "OK",
          });
          console.log(response);
        
        }else{
          swal({
            title: "Order Placed Successfully",
            text: response.error,
            icon: "success",
            button: "OK",
          });
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetch_game = async () => {
    await fetch(`http://localhost/Backend/api_win_game/games/games.php`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if(response.success)
        setGame(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleConfirm = async () => {
    confirmOrder();
    if (amount < 10) {
      swal({
        title: "Error",
        text: "Amount not less than Rs 10",
        icon: "warning",
        button: "OK",
      });
    }
  };

  const handleNumberSelection = (number) => {
    setAmount(10);
    setSelectedNumber(number);
    setShowModal(true);
  };

  useEffect(() => {
    fetch_game();
  },[]);


  
  return (
    <div>
      <div>
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
      <div className="d-flex justify-content-between m-3">
                <div ><span className="font-weight-bold">Period </span> : {Moment().format("DDMMYYYY") + "101"}</div>
                <div ><Countdown date={  Moment(game?.end_time).format('hh-mm-ss')} /></div>
        </div>
      <div className="d-flex justify-content-between">
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
      </div>
      <Row xs="6" className="justify-content-between">
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
      <Row xs="6" className="justify-content-between">
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
