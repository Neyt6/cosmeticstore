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
                {products.map((item, id) => <Product
                    key={id}
                    image={item.image}
                    product={item.product}
                    price={item.price}
                    click={() => openPopup(item)}
                />)}
            </div>

            <Footer />

            <Popup active={popup} setActive={setActivePopup}>
                <div className="popupProduct ">
                    <img src={popupСontent.image} className="popupProductImage" alt=""></img>
                    <div className="popupTextBlock">
                        <div className="popupTitle">{popupСontent.product}</div>
                        <div className="popupDesc">{popupСontent.description}</div>
                        <div className="popupTitle">Цена {popupСontent.price} руб.</div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default SalePage