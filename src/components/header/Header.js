import React, { useState } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button, CardTitle, Row } from 'reactstrap'
import { RulesModal } from '../modal/RulesModal'

export const Header = () => {
    const [balance, setBalance] = useState(100);
    const [showModal, setShowModal] = useState(false);

    const handleRecharge = () => {
        setBalance(balance + 100);
      };
    
      const handleRecord = () =>{
        // console.log("Handle Record Clicked");
        // return (<SweetAlert success title="Good job!" onConfirm={()=>{console.log("Comfirmed")}} onCancel={()=>{console.log("Comfirmed")}}>
        //   You clicked the button!
        // </SweetAlert>)
      }
  return (
    <div>
            {/* <SweetAlert showCancel showCloseButton   confirmBtnText="Yessss" success title="Good job!" onConfirm={() =>({ showAlert: false })} onCancel={() => this.setState({ showAlert: false })} >
          You clicked the button!
        </SweetAlert> */}
          <Row className="align-items-center justify-content-between">
            <CardTitle tag="h5" className="text-center txt-lg-center p-2">
              <span>Hi Name, Balance : {balance}</span>
            </CardTitle>
          </Row>
          {showModal && <RulesModal props={true}/>}
          <Row xs="4" className="align-items-center justify-content-between">
            <Button
              className="m-2"
              block
              color="success"
              onClick={handleRecharge}
            >
              Recharge
            </Button>

            <Button className="m-2" block color="primary" onClick={()=>{setShowModal(!showModal)}}>
              Rule's
            </Button>

            <Button className="m-2" block color="secondary" onClick={handleRecord}>
              Recorde
            </Button>
          </Row>
    </div>
  )
}
