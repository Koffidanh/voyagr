import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"
import BurgerMenu from "../Dropdown"
import Search from "../Search"

export const Navbar = () => {
    return (
        <>
            <Nav>
                <BurgerMenu />
                <Search />
                <NavMenu>
                    <NavLink to="/member" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Home
                    </NavLink>
                    <NavLink to="/login" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Login
                    </NavLink>
                    <NavLink to="/dashboard" activeStyle={{ textDecoration: "none", color: "#3e81c9" }}>
                        Dashboard
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