import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
} from "reactstrap";
import { Outlet, Routes, useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
export const TopNavbar = (args) => {
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
              <NavLink tag={Link} to="/win_game">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Report
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
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <ButtonGroup  className="m-2">
            <UncontrolledDropdown>
              <DropdownToggle color="success" caret>Profile</DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/profile">Profile</DropdownItem>
                <DropdownItem >Withdrawal</DropdownItem>
                <DropdownItem>Reset Password</DropdownItem>
                <DropdownItem>Download APK</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ButtonGroup>
        </Collapse>
      </Navbar>
      <Outlet/>
    </div>
    
  );
};
