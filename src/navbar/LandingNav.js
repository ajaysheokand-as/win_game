import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

export const LandingNav = (args) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () =>{
    navigate("/login");

  }
  return (
    <div className="container">
      <Navbar {...args} expand="md">
        <NavbarBrand href="/">Win Game</NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Rules
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="#">
                About Us
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="#">
                Help
              </NavLink>
            </NavItem>
          </Nav>
          {/* <ButtonGroup  className="m-2">
            <UncontrolledDropdown>
              <DropdownToggle color="success" caret>Profile</DropdownToggle>
              <DropdownMenu>
                <DropdownItem >Profile</DropdownItem>
                <DropdownItem >Withdrawal</DropdownItem>
                <DropdownItem>Reset Password</DropdownItem>
                <DropdownItem>Download APK</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ButtonGroup> */}
        </Collapse>
      </Navbar>
    </div>
  );
};
