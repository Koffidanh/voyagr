import React from 'react'
import { Nav, NavBtn, NavBtnLink } from "./NavbarElements"
// import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import BurgerMenu from "../Dropdown"
import Search from "../Search"
import "./style.css";
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
// import { faCog } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';


export const NavbarSignup = () => {

    return (
        <>
            <Nav>
                <h1>Voyagr Logo</h1>
                {/* <NavMenu>
                        <NavLink to="/dashboard" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                            <FontAwesomeIcon icon={faHome} size="lg" />
                        </NavLink>
                        <NavLink to="/friends" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                            <FontAwesomeIcon icon={faUserFriends} size="lg" />
                        </NavLink>
                        <NavLink to="/settings" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                            <FontAwesomeIcon icon={faCog} size="lg" />
                        </NavLink>
                    </NavMenu> */}
                <NavBtn>
                    <LoginButton />
                    <SignupButton />
                    {/* <NavBtnLink onClick={() => loginWithRedirect()}>Log In</NavBtnLink> */}
                </NavBtn>
                {/* <BurgerMenu /> */}

            </Nav>
        </>
    )
}

export default NavbarSignup;