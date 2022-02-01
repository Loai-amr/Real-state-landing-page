import React from 'react'
import styled,{ css } from 'styled-components/macro';
import { Button } from './Button'
import ImageK from '../images/kitchen.jpg';
import {IoMdArrowRoundForward} from 'react-icons/io'
import Fade from 'react-reveal/Fade';

const BlackBack = () => {
    return (
        <BlackWrap>
             <Fade bottom>
            <WhiteBack>
                <LeftWhite>
                    <h1>Stunning Interior</h1>
                    <p>ELIXR is your gateway to the Real Estate world, not only limited to providing buyers/investors with potential opportunities, but also offering our clients ongoing breath-taking creative posts covering the different aspects of our scope of services ranging from: potential deals, home/office setups, area solutions, furniture, interior designing inspiring posts that make your day.
                    </p>
                    <p>We are always on hand to provide astute insightful advice on all your property needs</p>
                    <Button css={`min-width:190px`}>Learn More <Arrow/></Button>
                </LeftWhite>
                <RightWhite src={ImageK} alt='kitchen' />
            </WhiteBack>
            </Fade>
        </BlackWrap>
    )
}

export default BlackBack


const BlackWrap = styled.section`
padding: 7rem 0;
background: #000d1a;
`;

const WhiteBack = styled.section`
display: flex;
flex-direction: row;
background: #fff;
padding:: 0 1rem;

@media screen and (max-width: 768px) {
    flex-direction: column;
};
`;

const LeftWhite = styled.div`
padding: 3rem 6rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

h1 {
    margin-bottom: 2rem;
    font-size: clamp(1rem, 4vw, 2rem);
}

p {
    font-size: clamp(.5rem, 4vw, 1.3rem);
    margin-bottom: 2rem;
};

@media screen and (max-width: 768px) {
    order: 2;
    justify-content: center;
    align-items: center;
    padding: 3rem 4rem;
};
`;

const RightWhite = styled.img`
display: flex;
width: 50%;
object-fit: cover;

@media screen and (max-width: 768px) {
    order: 1;
    height: 90%;
    width: 90%;
    margin:auto;
    margin-top:-50px;
};
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;