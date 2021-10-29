import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Context/useAuth";
import "./Header.css"

const Header = () => {

  const { user ,logOut} = useAuth()
 
  const clickLogOut = () => {
    logOut()
  }
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand >
            <img
              height="50px"
              src="https://i.ibb.co/NyvrdxM/cropped-Travel-logo-drk.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navbar">
              <Link to="/home">Home</Link>

              {!user.email ? (
                <Link to="/login">Login</Link>
              ) : (
                <>
                  <Link to="/myBookings">My Bookings</Link>
                  <Link to="/manageAllBooking">Manage All Booking</Link>
                  <Link to="/addNewService">Add A New Service</Link>
                </>
              )}
            </Nav>
            {user.email&&<><img
              style={{ width: "50px", borderRadius: "50%" }}
              src={user.photoURL}
              alt="" /><span className="mx-2"> {user.displayName}</span><button onClick={clickLogOut}>Log Out</button></>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
