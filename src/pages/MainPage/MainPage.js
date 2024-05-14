import React, { useState } from "react";
import "./MainPage.css"
import Slider from "./imageSlider";

import Product from "./Product";
import Popup from "../Popup/Popup";

import products from "./products";
import Footer from "./Footer";

const MainPage = () => {

    const [popup, setActivePopup] = useState(false)
    const [popupСontent, setPopupСontent] = useState("")

    const openPopup = (popupСontent) => {
        setPopupСontent(popupСontent)
        setActivePopup(true)
    }

    function getRandomElements(arr, num = 4) {
        let copiedArray = [...arr];

        for (let i = copiedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
        }

        return copiedArray.slice(0, num);
    }

    let products2 = getRandomElements(products)

    return (
        <div className="contaner">
            <Slider />

            <div className="content titleText">
                Рекомендуем
            </div>
            <div className="content products">
                {products2.map((item, id) => <Product
                    key={id}
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
                    <div className="advantage-description">Учитываем индивидуальные потребности покупателя</div>
                </div>
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

export default MainPage