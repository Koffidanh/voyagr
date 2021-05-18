import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import BurgerMenu from "../Dropdown"
import Search from "../Search"
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Navbar = () => {
    return (
        <>
            <Nav>
                <Search />
                <NavMenu>
                    <NavLink to="/dashboard" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </NavLink>
                    <NavLink to="/friends" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        <FontAwesomeIcon icon={faUserFriends} size="lg" />
                    </NavLink>
                    <NavLink to="/settings" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        <FontAwesomeIcon icon={faCog} size="lg" />
                    </NavLink>
                </NavMenu>
                {/* <NavBtn>
                        <NavBtnLink to="/signup">Log In</NavBtnLink>
                    </NavBtn> */}
                <BurgerMenu />
            </Nav>
        </>
    )
}

export default Navbar;