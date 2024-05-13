import React, { useState } from "react"

import Popup from "../Popup/Popup";
import products from "../MainPage/products";
import Product from "../MainPage/Product";
import Footer from "../MainPage/Footer";

const SalePage = () => {

    const [popup, setActivePopup] = useState(false)
    const [popupСontent, setPopupСontent] = useState("")

    const openPopup = (text) => {
        setPopupСontent(text)
        setActivePopup(true)
    }

    return (
        <div className="contaner">
            <div className="content titleText">
                Цены
            </div>
            <div className="content products">
                {products.map(item => <Product
                    image={item.image}
                    product={item.product}
                    price={item.price}
                    click={() => openPopup(item)}
                />)}
            </div>

            <Footer />

            <Popup active={popup} setActive={setActivePopup}>
                <div>{popupСontent.image}</div>
                <div>{popupСontent.product}</div>
                <div>{popupСontent.price}</div>
            </Popup>
        </div>
    )
}

export default SalePage