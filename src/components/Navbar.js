import React, { useState, useEffect, useRef } from "react";
import {
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavItem,
  Collapse,
  NavbarToggler,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import PhotoUpload from "./PhotoUpload";
import { useAuth } from "utils/AuthProvider";

const Sitebar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const auth = useAuth()

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (event) => {
    if (document.documentElement.scrollTop && !hasScrolled) {
      setHasScrolled(true);
    } else if (!document.documentElement.scrollTop) {
      setHasScrolled(false);
    }
  };

  const toggleNavbar = () => setCollapsed(!collapsed);

  let history = useHistory();
  const handleLogout = () => {
    // clears token
    auth.logout();
    // direct user to the homepage
    history.push("/");
  };

  const openRegister = () => setShowRegister(true);
  const closeRegister = () => setShowRegister(false);

  const openUpload = () => setShowUpload(true);
  const closeUpload = () => setShowUpload(false);

  return (
      <Navbar color="faded" light expand="md" className={classNames({
        "is-expanded": !collapsed,
        "has-scrolled": hasScrolled,
      })}>
        {/* <NavbarBrand href="/" className="mr-auto"></NavbarBrand> */}
        <NavbarToggler onClick={toggleNavbar} className="ml-auto" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            {!auth.isLoggedIn ? (
              <>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <Button color="primary" onClick={openRegister}>Register</Button>
                </NavItem>
              </>
            ) : null}
            {auth.isLoggedIn ? (
              <>
                <NavItem>
                  <NavLink href="/myportfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <Button color="primary" onClick={openUpload}>Photo Upload</Button>
                </NavItem>
                <NavItem>
                  <Button color="dark" onClick={handleLogout}>Logout</Button>
                </NavItem>
                <NavItem className="username"> 
                  {`Welcome back, ${auth.user.username}`}
                </NavItem>
              </>
            ) : null}
            { auth.user.admin ? (
              <NavItem>
                <NavLink href="/admin">Admin</NavLink>
              </NavItem>
            ) : null}
          </Nav>
        </Collapse>
        <RegistrationForm
          open={showRegister}
          close={closeRegister}
        />
        <PhotoUpload
          open={showUpload}
          close={closeUpload}
        />
      </Navbar>
  );
};

export default Sitebar;

function classNames(classes) {
  return Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(" ");
}
