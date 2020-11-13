import React, {useState} from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';



const Sitebar = (props) => {

    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setisOpen(newIsOpen);
    }

    return(
        <Navbar color='faded' light expand="md">
            <NavbarBrand href="/">Workout Log</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {props.isLoggedIn ?
                        <NavItem>
                            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                    : null }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;