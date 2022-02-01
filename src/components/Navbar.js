import React,{useState,useEffect} from 'react'
import styled,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData} from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle,ShoN}) => {

    const [Show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll",null);
        };
    }, []);

    return (
        <Nav Show={Show} ShoN={ShoN}>
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
height:60px;
display:flex;
justify-content: space-between;
padding: 1rem 2rem;
z-index:100;
position:fixed;
width:100%;

transition-timing-function: ease-in;
transition: all 0.6s;
background-color: ${({Show,ShoN}) => (Show ? '#000d1a' : (ShoN ? '#000d1a' : 'transparent'))};

`;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height:100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
${NavLink}
fon-style: italic;
`;

const MenuBars = styled(FaBars)`
display:none;
color:white;
@media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    transform: translate(-50%, 25%);
}
`;

const NavMenu = styled.div`
display:flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px) {
    display: none;}
`;

const NavMenuLinks = styled(Link)`
${NavLink}
transition: 0.2s ease-in-out;

&:hover {
    color: rgba(255, 255, 255, 0.671);
}
`;

const NavBtn = styled.div`
display:flex;
align-items:center;
margn-right: 24px;

@media screen and (max-width: 768px) {
    display: none;}
`