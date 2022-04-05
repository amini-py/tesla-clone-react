/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftButton, rightButton, background }) {
    return (
        <Main background={background}>
            <Fade bottom>
                <section className="sub-text">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </section>
            </Fade>

            <section>
                <Fade bottom>
                    <section className="button-container">
                        <button className="order-button">{rightButton}</button>
                        {
                            leftButton &&
                            <button className="inventory-button">
                                {leftButton}
                            </button>
                        }
                    </section>
                </Fade>
                <span className="material-icons">
                    &#xe5e1;
                </span>
            </section>
        </Main>
    );
};

export default Section;

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    background: ${props => `url(${props.background})`} center/cover no-repeat;
    /* filter: blur(1px); */

    & span {
    margin: 30px 0;
    font-size: 200px;
    color: #fff;
    font-size: 28px !important;
    transition: fill .3s ease, stroke .3s ease;
    animation: Bounce infinite 1.75s;
}
`;
