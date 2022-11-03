import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {LandingNav} from "../../components/navbar/LandingNav";
import {Footer} from "../../components/footer/Footer";
import SweetAlert from 'react-bootstrap-sweetalert';
import { writeToken } from "../../utils/Common";
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

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   const loginUser = (credentials) => {
    console.log("Login API Called");
    fetch(`http://localhost\\Backend\\api_win_game\\users\\user.php`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          type:"login",
          mobile_no:credentials.number,
          password: credentials.password,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if(response.success === false){
            return (<SweetAlert success title="Good job!" onConfirm={()=>{console.log("Comfirmed")}} onCancel={()=>{console.log("Comfirmed")}}>
            You clicked the button!
          </SweetAlert>)
            
          }else if(response.success === true){
            console.log("Response",response);
            writeToken(response.token);
            navigate("/win_game");
            // return(
            //   <SweetAlert warning title="Faild to Login" onConfirm={()=>{console.log("Comfirmed")}} onCancel={()=>{console.log("Canceled")}}>
            //   {response.error}
            // </SweetAlert>
            // )
          }
          
        })
        .catch((err) => {
          console.log("Error",err);
        });
    };

  const onSubmit = (data) => {
    console.log(data);
    return loginUser(data);
    // navigate("/win_game");
  };

  const handleRegisterd= () =>{
    navigate("/register");
  }

  return (
    <div className="container">
      <LandingNav/>
      {/* <SweetAlert success title="Good job!" onConfirm={()=>{console.log("Comfirmed")}} onCancel={()=>{console.log("Cancelled")}}>
        You clicked the button!
      </SweetAlert> */}
      <Row>
        <Col sm="12" className="mt-2" md={{ size: 5 }}>
          <Card>
            <h2 className="text-center m-4">Login | <Button onClick={handleRegisterd} color="primary" outline>Register</Button></h2>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="m-3">
                  <Label for="mob_no">Mobile No</Label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("number", { required: "Mobile is Required" })}
                    placeholder="Mobile No."
                  />
                  {errors.mob_no && (
                    <p style={{ color: "red" }}>{errors.mob_no.message}</p>
                  )}
                </FormGroup>
                <FormGroup className="m-3">
                  <Label for="password">Password</Label>
                  <input
                    //   type="password"
                    className="form-control"
                    {...register("password", {
                      required: "You must specify a password",
                    })}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password.message}</p>
                  )}
                </FormGroup>
                <FormGroup className="m-3">
                  <input
                    className="form-control btn btn-success"
                    value="Login"
                    type="submit"
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md={{ size: 7 }} className="mt-2">
          <Card>
            <CardImg
              top
              width="100%"
              src="https://picsum.photos/400/190"
              alt="Card image cap"
            />
          </Card>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
};
