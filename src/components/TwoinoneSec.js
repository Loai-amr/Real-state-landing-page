import React from 'react'
import styled from 'styled-components/macro';
import { Button } from './Button'
import ImageTt from '../images/house-10.jpg';
import ImageEe from '../images/house-11.jpg';
import Fade from 'react-reveal/Fade';



const TwoinoneSec = () => {
    return (
        <TwoWrap>
            <ProdText>
                <h1>View our newest Homes</h1>
            </ProdText>
                <ProdWr>
                <Fade left>
                        <ComWrapper pad='true'>
                            <Comimg src={ImageTt} alt='House'/>
                            <Comtext>
                                <p>3 Bed 3 Bath House in Venice, California</p>
                            </Comtext>
                            <Button to={'/'}>View Details</Button>
                        </ComWrapper>
                </Fade>
                <Fade right>                        <ComWrapper padd='true'>
                            <Comimg src={ImageEe} alt='House'/>
                            <Comtext>
                                <p>4 Bed 2 Bath House in Miami, Florida</p>
                            </Comtext>
                            <Button to={'/'}>View Details</Button>
                        </ComWrapper>
                </Fade>
                </ProdWr>
        </TwoWrap>
    )
}

export default TwoinoneSec


const TwoWrap =styled.section`
padding: 0 6rem ;
padding-top: 4rem;
display:flex;
flex-direction: column;

@media screen and (max-width: 768px) {
    padding: 0 2.8rem ;
    padding-top: 5rem;
};
margin-bottom: 6rem;
`;

const ProdText = styled.div`
margin-bottom: 2rem;
font-size: clamp(0.8rem, 4vw, 1.5rem);

`;

const ProdWr = styled.div`
display: flex;
flex-direction: row;
width:100%;

@media screen and (max-width: 768px) {
    flex-direction:column;
};
`;

const ComWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top:${({padd}) => (padd ? '8rem' : '0')};
padding-bottom:${({pad}) => (pad ? '8rem' : '0')};
`;

const Comimg = styled.img`
    display: flex;
    height: 95%;
    width: 95%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
    };
`;


const Comtext = styled.div`
display: flex;
padding: 1rem 0;
p {
    font-size: clamp(.5rem,5vw,1.5rem);
};
`;