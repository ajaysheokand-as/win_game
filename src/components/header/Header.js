import React, { useState } from 'react';
import { Button, CardTitle, Row } from 'reactstrap';
import { CustomModal } from '../modal/CustomModal';
import { RulesModal } from '../modal/RulesModal';
import swal from 'sweetalert';
import { Payment } from '../../pages/payment/Payment';

export const Header = () => {
    const [balance, setBalance] = useState(100);
    const [payment, setPayment] = useState({showPayment:false, amount:10});
    const [showModal, setShowModal] = useState({CustomModal:false,RulesModal:false});
    console.log("This is payment", payment)

    const handleAddAmount = () => {
      setShowModal(prev=>({...prev,CustomModal:!prev.CustomModal}))
      };

    const handleRulesModal = () => {
      setShowModal(prev=>({...prev,RulesModal:!prev.RulesModal}))
      };
    
    const handleRecord = async () =>{
      await fetch(`http://localhost/Backend/api_win_game/winingNumber/wonNumber.php?period_no=111`, {
        // localhost\Backend\api_win_game\winingNumber\wonNumber.php?period_no=111
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log("This is won number",response.won_number);
        const wonNumber = response.won_number;
        swal({
          title: wonNumber,
          text: "is the Won Number",
          icon: "success",
          button: "OK",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      }
    const handleConfirm = (amount) => {
      console.log("This is handleConfirm");
      setPayment({showPayment: true, amount});
    }
  return (
    <>
    { (payment?.showPayment === false) ? 
    <div>
      {showModal?.CustomModal &&
       <CustomModal
          showModal= {true}
          toggle
          title="Add Amount"
          handleConfirm = {handleConfirm}
          />}
          <Row className="align-items-center justify-content-between">
            <CardTitle tag="h5" className="text-center txt-lg-center p-2">
              <span>Hi Name, Balance : {balance}</span>
            </CardTitle>
          </Row>
          {showModal?.RulesModal && <RulesModal showModal={showModal?.RulesModal} setShowModal={handleRulesModal} />}
          <Row xs="4" className="align-items-center justify-content-between">
            <Button
              className="m-2"
              block
              color="success"
              onClick={handleAddAmount}
            >
               + Funds
            </Button>

            <Button className="m-2" block color="primary" onClick={handleRulesModal}>
              Rule's
            </Button>

            <Button className="m-2" block color="danger" onClick={handleRecord}>
              Result Test
            </Button>
          </Row>
    </div>
    :
    <Payment amount={payment?.amount}/>

      }
    </>

  )
}
