import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import BurgerMenu from "../Dropdown"

export const Navbar = () => {
    return (
        <>
            <Nav>
                <BurgerMenu />
                <NavMenu>
                    <NavLink to="/member" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Home
                    </NavLink>
                    <NavLink to="/login" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Login
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    )
}

export default Navbar;