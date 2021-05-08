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
            <DropdownToggle className="dropdown-icon" >
                <FontAwesomeIcon icon={faBars} />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href="/member">Home</DropdownItem>
                <DropdownItem href="/">Login</DropdownItem>
                <DropdownItem href="/signup">Signup</DropdownItem>
            </DropdownMenu>
        </Dropdown >
    );
}


export default BurgerMenu;