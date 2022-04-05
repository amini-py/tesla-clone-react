/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Components
import Main from './Main';

function Home() {
    const description = "Order Online for Touchless Delivery";
    const orderButton = "CUSTOM ORDER";
    const inventoryButton = "EXISTING INVENTORY";

    const info = [
        {
            id: 0,
            title: "Model S",
            description: description,
            leftButton: orderButton,
            rightButton: inventoryButton,
            background: "./images/Model-s.jpg"
        },
        {
            id: 1,
            title: "Model Y",
            description: description,
            leftButton: orderButton,
            rightButton: inventoryButton,
            background: "./images/Model-y.jpg"
        },
        {
            id: 2,
            title: "Model 3",
            description: description,
            leftButton: orderButton,
            rightButton: inventoryButton,
            background: "./images/Model-3.jpg"
        },
        {
            id: 3,
            title: "Model X",
            description: description,
            leftButton: orderButton,
            rightButton: inventoryButton,
            background: "./images/Model-x.jpg"
        },
        {
            id: 4,
            title: "Solar Panels",
            description: "Lowest Cost Solar Panels in America",
            leftButton: orderButton,
            rightButton: "LEARN MORE",
            background: "./images/solar-panel.jpg"
        },
        {
            id: 5,
            title: "Solar Roof",
            description: "Produce Clean Energy From Your Roof",
            leftButton: orderButton,
            rightButton: "LEARN MORE",
            background: "./images/solar-roof.jpg"
        },
        {
            id: 6,
            title: "Accessories",
            description: null,
            leftButton: "SHOP NOW",
            rightButton: null,
            background: "./images/accessories.jpg"
        }
    ];

    const mainComponent = info.map(info => (
        <Main
            key={info.id}
            title={info.title}
            description={info.description}
            leftButton={info.rightButton}
            rightButton={info.leftButton}
            background={info.background}
        />
    ));

    return (
        <section>
            {mainComponent}
        </section>
    );
};

export default Home;

