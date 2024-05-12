import React, { useState } from "react";

import "./MainPage.css"
import Product from "./Product";

import Slider from "./imageSlider";
import Popup from "../Popup/Popup";
import products from "./products";

const MainPage = () => {

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

            <div className="content">
                <div className="titleText">Наши преимущества</div>
                <div className="advantage">
                    🗨️
                    <div className="advantage-subtitle">Доступность</div>
                    <div className="advantage-description">Предлагаем услуги и поддержку круглосуточно</div>
                </div>
                <div className="advantage">
                    ⭐
                    <div className="advantage-subtitle">Высокий уровень</div>
                    <div className="advantage-description">Высокий уровень качества во всем, что делаем</div>
                </div>
                <div className="advantage">
                    ⚙️
                    <div className="advantage-subtitle">Персонализация</div>
                    <div className="advantage-description">Учитываем индивидуальные потребности и предпочтения</div>
                </div>
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