import React, { } from "react";

import "./MainPage.css"
import Product from "./Product";

import pimage from "../../images/shampoo.png"
import Slider from "./imageSlider";

const MainPage = () => {

    const products = [
        {
            image: pimage,
            product: 'Шампунь',
            price: "10"
        },
        {
            image: pimage,
            product: 'Шампунь',
            price: "10"
        },
        {
            image: pimage,
            product: 'Шампунь',
            price: "10"
        },
        {
            image: pimage,
            product: 'Шампунь',
            price: "10"
        },
        {
            image: pimage,
            product: 'Шампунь',
            price: "10"
        },
        {
            image: pimage,
            product: 'Шампунь',
            price: "10"
        },
        
    ]

    return (
        <div className="contaner">
            <div className="content titleText">
                Рекомендуем
            </div>
            <Slider/>
            <div className="content products">
                {products.map(item => <Product
                    image={item.image}
                    product={item.product}
                    price={item.price}
                />)}
            </div>
        </div>
    )
}

export default MainPage