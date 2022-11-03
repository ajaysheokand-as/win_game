import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardTitle, Form, FormGroup, Label } from 'reactstrap';
import { useForm } from "react-hook-form";

export const OTPVerify = () => {
    const [showModal, setShowModal] =  useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        setShowModal(false);
        console.log(data);
        // handleModel();
      }; // your form submit function which will invoke after successful validation
    
    const  handleModel = () => {
       setShowModal(false);
      }
  return (
    <div>
        {/* <Button color="danger" onClick={handleModel}>{"ModalButton"}</Button> */}
        <Modal isOpen={showModal} toggle={true}>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Verify</ModalHeader>
        <ModalBody className="align-items-center justify-content-between">
          <CardTitle className="text-center p-2">
          
            <FormGroup className="m-3">
                <Label className="my-1" for="emailOTP">Email OTP</Label>
                <input
                  type="number"
                  className="form-control"
                  {...register("emailOTP", {required : "Email OTP is required."})}
                  placeholder="Email OTP"
                />
                {errors.emailOTP && <p style={{color:"red"}}>{errors.emailOTP.message}</p>}
              </FormGroup>
              
            
          </CardTitle>

          {/* {modalNote && <div className="text text-warning"> {modalNote}</div>} */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleModel}>
            Cancel
          </Button>
          <input className="btn btn-success" value="Confirm" type="submit" />
        </ModalFooter>
        </Form>
      </Modal>
      </div>
  )
}
