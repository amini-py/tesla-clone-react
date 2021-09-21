/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';

function Section() {
    return (
        <Main>
            <section className="sub-text">
                <h1>Model S</h1>
                <h2>Order Online for <a href="#">Touchless Delivery</a></h2>
            </section>

            <section>
                <section className="button-container">
                    <button className="order-button">CUSTOM ORDER</button>
                    <button className="inventory-button">EXISTING INVENTORY</button>
                </section>
                <span class="material-icons">
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
    background: url('images/model-s.jpg') center/cover no-repeat;
`;
