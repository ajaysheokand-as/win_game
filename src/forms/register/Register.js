import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
    Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Form,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import { OTPVerify } from "../../components/modal/OTPVerify";
import { Footer } from "../../components/footer/Footer";
import { LandingNav } from "../../components/navbar/LandingNav";
import { readToken } from "../../utils/Common";
import swal from 'sweetalert';
import { Constant } from "../../utils/Constant";

export const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
    const [showModal, setShowModal] =  useState(false);
    const [apiRes, setApiRes] =  useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        setUserData(data);
        addUser();
        // setShowModal(true);
      }; // your form submit function which will invoke after successful validation

      const addUser = () => {
        fetch(`${Constant.BASE_URL}\\users\\user.php`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              accept: "application/json",
              Authorization: readToken()
            },
            body: JSON.stringify(userData),
          })
            .then((response) => response.json())
            .then((response) => {
              response.success && swal({
                title: "Regstration Successfull",
                text: response.error,
                icon: "success",
                button: "OK",
              });
              // setShowAlert(true);
              setApiRes(response);
              console.log("Response",response);
            })
            .catch((err) => {
              setApiRes(err);
              swal({
                title: "Error",
                text: err,
                icon: "warning",
                button: "Retry",
              });
              console.log("Error",err);
            });
        };
    const handleLogin = () => {
      navigate("/login");
    }

  return (
    <div className="container" style={{maxWidth: "500px", marginLeft:"auto", marginRight:"auto"}}>
      <LandingNav/>
        {showModal && <OTPVerify/>}
        {/* {apiRes && (apiRes.success === false) ? <NotifySwal props={apiRes.err.error}/> : <NotifySwal/>} */}
      <Row className="d-flex flex-column">
        <Col className="mt-2">
        <Card>
        
          <CardBody>
          <h2 className="text-center m-2">Register | <Button onClick={handleLogin} color="primary" outline>
          Login
        </Button></h2> 
            <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup className="m-3">
                <Label className="my-1" for="name">Full Name</Label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", {required : "Name is required."})}
                  placeholder="Full Name"
                />
                {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
              </FormGroup>
              <FormGroup className="m-3">
                <Label className="my-1" for="email">Email</Label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email", {required : "Email is required"})}
                  placeholder="Email"
                />
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
              </FormGroup>
              <FormGroup className="m-3">
                <Label className="my-1" for="mobile_no">Mobile No</Label>
                <input
                  type="number"
                  className="form-control"
                  {...register("mobile_no", {required : "Mobile No is Required."})}
                  placeholder="Mobile No"
                />
                {errors.mobile_no && <p style={{color:"red"}}>{errors.mobile_no.message}</p>}
              </FormGroup>
              <FormGroup className="m-3">
                <Label className="my-1" for="exampleEmail">Password</Label>
                <input 
                  type="password"
                  className="form-control"
                  {...register("password",  {required : "You must specify a password"})}
                  placeholder="Password"
                />
                {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
              </FormGroup>
              <FormGroup className="m-3">
                <input className="btn btn-success float-end" value="Register" type="submit" />
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        </Col>
        <Col className="mt-2">
        <Card >
        <CardImg top width="100%" src="https://picsum.photos/400/260" alt="Card image cap" />
            </Card>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}
