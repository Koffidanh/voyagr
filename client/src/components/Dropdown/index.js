import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./style.css";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BurgerMenu = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown className="dropdown" isOpen={dropdownOpen} toggle={toggle} size="lg">
            <DropdownToggle color="343A40" className="dropdown-icon" >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem href="/dashboard">Dashboard</DropdownItem>
                <DropdownItem href="/settings">Settings</DropdownItem>
                <DropdownItem href="/">Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown >
    );
}


export default BurgerMenu;