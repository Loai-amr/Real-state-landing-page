import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Fade from 'react-reveal/Fade';

const InfoSection = (props) => {
    return (
        <Section>
           <Container>
               <ColumnLeft reverse={props.reverse}>
               <h1>{props.heading}</h1>
               <p>{ props.paragraphOne }</p>
               <p>{ props.paragraphTwo }</p>
               <Button to="/" primary="true" >{ props.buttonLabel}</Button>
               </ColumnLeft>
               <ColumnRight reverse={props.reverse}>
               <img src={props.image} alt="home" />
               </ColumnRight>
           </Container>
        </Section>
    )
}

export default InfoSection


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0;
`;


const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;
order: ${({reverse}) => (reverse ? '2' : '1')};

h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem,6vw,2rem);
};

p {
    margin-bottom: 2rem;
};
`;

const ColumnRight = styled.div`
padding: 1rem 2rem;
display: flex;
justify-content: center;
align-items: center;
order: ${({reverse}) => (reverse ? '1': '2')};

img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: 90%;
        width: 90%;
    };
};

@media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
}
`;