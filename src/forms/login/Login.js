import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LandingNav } from "../../navbar/LandingNav";
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
import { Footer } from "../../footer/Footer";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

  const onSubmit = (data) => {
    loginUser(data)
    console.log(data);
    navigate("/win_game");
  }; // your form submit function which will invoke after successful validation 

  const handleRegisterd= () =>{
    navigate("/register");
  }

  return (
    <div className="container">
      <LandingNav/>
      <Row>
        <Col sm="12" className="mt-2" md={{ size: 5 }}>
          <Card>
            <h2 className="text-center m-4">Login | <Button onClick={handleRegisterd} color="primary" outline>
          Register
        </Button></h2>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup className="m-3">
                  <Label for="email">Email</Label>
                  <input
                    type="email"
                    className="form-control"
                    {...register("email", { required: "Email is Required" })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
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
