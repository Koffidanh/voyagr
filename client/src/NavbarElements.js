
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components"

export const Nav = styled.nav`
background: #333333;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw-1000px) / 2);
z-index: 10;
align-items: center;
border-bottom: 3px solid #61DAFB;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #61DAFB;
}
&.active {
    color: #61DAFB;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


/* @media screen and (max-width: 768px) {
    display:none;
} */
`;

// export const NavBtn = styled.nav`
// display: flex;
// align-items: center;
// margin-right: 24px;

//  @media screen and(max-width: 768px) {
//     display:none;
//  }
// `;

// export const NavBtnLink = styled(Link)`
// border-radius:4px;
// background: #256ce1;
// padding: 10px 22px;
// color: #fff;
// border: none;
// outline: none;
// cursor: pointer;
// transition: all 0.2s ease-in-out;
// text-decoration: none;

// &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
// }

// `;
