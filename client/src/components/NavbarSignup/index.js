import React from 'react'
import { Nav, NavBtn, NavBtnLink } from "./NavbarElements"
import "./style.css";
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';


export const NavbarSignup = () => {

    return (
        <>
            <Nav>
                <h1>Voyagr Logo</h1>
                <NavBtn>
                    <LoginButton />
                    <SignupButton />
                </NavBtn>

            </Nav>
        </>
    )
}

export default NavbarSignup;