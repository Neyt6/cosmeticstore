import React, { } from "react"

import wicon from "../../images/icons/whatsup.svg"
import ticon from "../../images/icons/telegram.svg"
import micon from "../../images/icons/mail.svg"
import vkicon from "../../images/icons/vk.svg"
import oicon from "../../images/icons/odn.svg"

const ContactInfo = () => {

    return (
        <div className="contaner">
            <div className="content">
                <div className="titleText">Свяжитесь с нами</div>

                <h3>Позвоните нам:</h3>
                <div className="numberBlock">
                    <img src={wicon} alt="" className="icons" />
                    <img src={ticon} alt="" className="icons" />
                    +7(999)99-999-99
                </div>

                <h3>Заходите в наши социальные сети:</h3> 
                <div className="numberBlock">
                    <img src={vkicon} alt="" className="icons" />
                    <img src={oicon} alt="" className="icons" />
                    @CosmeticStore
                </div>

                <h3>Напишите нам:</h3> 
                <div className="numberBlock">
                    <img src={micon} alt="" className="icons" />
                    cosmetic@store.com
                </div>

                <h3>Или приходите лично:</h3> 
                <div>г. Таганрог ул. Петровская 71, 347900</div><br />

            </div>
        </div>
    )
}

export default ContactInfo