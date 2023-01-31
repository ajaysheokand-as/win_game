import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LandingNav } from "../../components/navbar/LandingNav";
import { Footer } from "../../components/footer/Footer";
import swal from 'sweetalert';

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
import { CustomButton } from "../../components/buttons/CustomButton";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginUser = (credentials) => {
    fetch(`http://localhost\\Backend\\api_win_game\\users\\user.php`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        type: "login",
        mobile_no: credentials.number,
        password: credentials.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success === false) {
          // console.log("Response false", response);
          swal({
            title: "Retry or Register",
            text: response.error,
            icon: "warning",
            button: "Retry",
          });
        } else if (response.success === true) {
          // console.log("Response true", response);
          writeToken(response.token);
          swal({
            title: "Good job!",
            text: "Login in Successful!",
            icon: "success",
            button: "Let's Start",
          });
          navigate("/win_game");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    return loginUser(data);
  };

  const handleRegisterd = () => {
    navigate("/register");
  };

  return (
    <div className="container" style={{maxWidth: "500px", marginLeft:"auto", marginRight:"auto"}}>
      <LandingNav />
      <Row className="d-flex flex-column">
        <Col  className="mt-2" >
          <Card>
            <h2 className="text-center m-4">
              Login |{" "}
              <Button onClick={handleRegisterd} color="primary" outline>
                Register
              </Button>
            </h2>
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
        <Col className="mt-2">
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
      <Footer />
    </div>
  );
};
