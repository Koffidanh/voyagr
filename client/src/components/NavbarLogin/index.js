import React from 'react'
import { Nav, NavBtn, NavBtnLink } from "./NavbarElements"
// import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import BurgerMenu from "../Dropdown"
import Search from "../Search"
// import { faHome } from '@fortawesome/free-solid-svg-icons'
// import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
// import { faCog } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton';


export const NavbarLogin = () => {
    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <>
                <Nav>
                    <Search />
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
                        {/* <NavBtnLink onClick={() => loginWithRedirect()}>Log In</NavBtnLink> */}
                    </NavBtn>
                    <BurgerMenu />

                </Nav>
            </>
        )
    )
}

export default NavbarLogin;