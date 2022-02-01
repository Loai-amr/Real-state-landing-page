import React from 'react'
import styled,{ css } from 'styled-components/macro';
import { Button } from './Button'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {IoMdArrowRoundForward} from 'react-icons/io'

const Footer = () => {
    return (
        <Footerr>
            <UpperFooter>
                <UpperLeft>
                    <h1>Let's find</h1>
                    <h1>your Dream Home</h1>
                </UpperLeft>
                <UpperRight>
                    <ul>
                        <li css={`font-weight:600`}>Contact Us</li>
                        <li>FAQ</li>
                        <li>Support</li>
                        <li>Questions</li>
                    </ul>
                    <ul>
                        <li css={`font-weight:600`}>Offices</li>
                        <li>Canada</li>
                        <li>United States</li>
                        <li>Egypt</li>
                    </ul>
                </UpperRight>
            </UpperFooter>
            <LowerFooter>
                <LowerLeft>
                   <a href="https://youtube.com" target="_blank"> <FaYoutube css={`cursor: pointer;`}/> </a>
                   <a href="https://instagram.com" target="_blank"> <FaInstagram  css={`cursor: pointer;`}/></a>
                   <a href="https://facebook.com" target="_blank"> <FaFacebookF  css={`cursor: pointer;`}/></a>
                   <a href="https://linkedin.com" target="_blank"> <FaLinkedinIn  css={`cursor: pointer;`}/></a>
                </LowerLeft>
                <LowerRight>
                    <Button css={`font-weight:600`}>Let's Chat!
                    <Arrow/>
                    </Button>
                </LowerRight>
            </LowerFooter>
        </Footerr>
    )
}

export default Footer


const Footerr = styled.section`
    padding: 4rem 3rem;
    
    background: #000d1a;
    display: flex;
    flex-direction: column;
`;

const UpperFooter = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    };
`;

const UpperLeft = styled.div`
font-size: clamp(1.5rem, 5vw, 3.3rem);
`;
const UpperRight = styled.div`
display: flex;
flex-direction: row;
padding-right: 5rem;
ul {
    padding: 1.5rem;
}
li {
    padding: 1rem;
    list-style: none;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    flex-direction: column;
};
`;



const LowerFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items:center;
    };
`;

const LowerLeft = styled.div`
display: flex;
flex-direction: row;
color: #CD853F;
font-size: clamp(1rem, 4vw, 2.3rem);
width:30%;
justify-content: space-evenly;

a {
    color: #CD853F; 
}

@media screen and (max-width: 768px) {
  min-width:200px
};
`;


const LowerRight = styled.div`
padding-right: 15vw;
@media screen and (max-width: 768px) {
   padding:2rem;
};
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;