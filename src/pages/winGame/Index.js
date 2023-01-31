import React, { useState } from "react";
import {
  Card,
  CardBody,
} from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import { NotifySwal } from "../../components/notification/NotifySwal";
import { Header } from "../../components/header/Header";
import { Order } from "../../components/order/Order";
export const Index = () => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="container">
      <Card className="mt-5">
       {showAlert && NotifySwal("Success")}
        <CardBody className="overflow-hidden ">
        <Header/>
        </CardBody>
        </Card>
      {/* <OrderModal selectedNumber = {selectedNumber}
      /> */}
      <Card className="mt-5">
        <CardBody className="overflow-hidden ">
         <Order/>
        </CardBody>
      </Card>
      
    </div>
  );
};
