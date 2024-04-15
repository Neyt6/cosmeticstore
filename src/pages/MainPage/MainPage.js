import React, { useState } from "react";

import "./MainPage.css"
import Product from "./Product";

import pimage from "../../images/shampoo.png"
import Slider from "./imageSlider";
import Popup from "../Popup/Popup";

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

    const [popup, setActivePopup] = useState(false)
    const [popupСontent, setPopupСontent] = useState("")

    const openPopup = (text) => {
        setPopupСontent(text)
        setActivePopup(true)
    }

    return (
        <div className="contaner">
            <Slider />

            <div className="content titleText">
                Рекомендуем
            </div>
            <div className="content products">
                {products.map(item => <Product
                    image={item.image}
                    product={item.product}
                    price={item.price}
                    click={() => openPopup(item)}
                />)}
            </div>
            <Popup active={popup} setActive={setActivePopup}>
                <div>{popupСontent.image}</div>
                <div>{popupСontent.product}</div>
                <div>{popupСontent.price}</div>
            </Popup>
        </div>

    )
}

export default MainPage