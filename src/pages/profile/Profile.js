import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardLink,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { Footer } from "../../components/footer/Footer";
import { TopNavbar } from "../../components/navbar/TopNavbar";
import Avatar from 'react-avatar';
export const Profile = () => {
  return (
    <div style={{maxWidth: "500px", marginLeft:"auto", marginRight:"auto"}}>
      <TopNavbar />
      <div className="container">
        <Row className="d-flex felx-column">
          <div sm="12" className="mt-2" md={{ size: 5 }}>
            <Card>
                <div className="justify-content-center flex">
            <Avatar src="https://picsum.photos/70/70" className="mb-4 mx-3 mt-1 inline"  size="70" round={true} />
            <h2  className="d-inline-block mt-4 mx-5"> Hi Ajay </h2>
            </div>
             
              <CardBody>
                <ListGroup flush>
                  <ListGroupItem>
                    User Id: <span className="fs-5">34567</span>{" "}
                  </ListGroupItem>
                  <ListGroupItem>Email Id: test@gmail.com</ListGroupItem>
                  <ListGroupItem>Mobile No: 1234567890</ListGroupItem>
                  <ListGroupItem>Balance: 67890</ListGroupItem>
                </ListGroup>
                <CardLink
                  className=" btn btn-outline-warning  m-2"
                >
                  Withdrawal
                </CardLink>
                <CardLink
                  className=" btn btn-outline-success  m-2"
                >
                  Edit Profile
                </CardLink>
                <CardLink
                  className=" btn btn-outline-primary  m-2"
                >
                  Reset Password
                </CardLink>
              </CardBody>
            </Card>
          </div>
          <div sm="12" md={{ size: 7 }} className="mt-2">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://picsum.photos/400/190"
                alt="Card image cap"
              />
            </Card>
          </div>
        </Row>
        <Footer/>
      </div>
    </div>
  );
};
