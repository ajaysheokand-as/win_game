import React, { useState } from 'react';
import { Button, CardTitle, Row } from 'reactstrap';
import { CustomModal } from '../modal/CustomModal';
import { RulesModal } from '../modal/RulesModal';

export const Header = () => {
    const [balance, setBalance] = useState(100);
    const [showModal, setShowModal] = useState({CustomModal:false,RulesModal:false});

    const handleAddAmount = () => {
      setShowModal(prev=>({...prev,CustomModal:!prev.CustomModal}))
      };

    const handleRulesModal = () => {
      setShowModal(prev=>({...prev,RulesModal:!prev.RulesModal}))
      };
    
      const handleRecord = () =>{
      }
  return (
    <div>
      {showModal?.CustomModal &&
       <CustomModal
          showModal= {true}
          toggle
          title="Add Amount"
          handleConfirm 
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

            <Button className="m-2" block color="secondary" onClick={handleRecord}>
              Recorde
            </Button>
          </Row>
    </div>
  )
}
