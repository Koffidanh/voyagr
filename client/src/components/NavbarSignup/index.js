import React from 'react'
import { Nav, NavBtn } from "./NavbarElements"
import "./style.css";
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';

export const NavbarSignup = () => {

    return (
        <>
            <Nav>
                <img
                    src="/voyagr.png"
                    // width="30"
                    height="60"
                    className="voyagr-logo"
                    alt="Voyagr logo"
                />
                <NavBtn >
                    <LoginButton />
                    <SignupButton />
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavbarSignup;