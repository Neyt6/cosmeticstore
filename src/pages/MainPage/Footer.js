import wicon from "../../images/icons/whatsup.svg"
import ticon from "../../images/icons/telegram.svg"
import micon from "../../images/icons/mail.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="titleText">
                    Наши контакты
                </div>
                <div className="numberBlock">
                    <img src={wicon} alt="" className="icons" />
                    <img src={ticon} alt="" className="icons" />
                    +7(999)99-999-99
                </div>

                <div className="numberBlock">
                    <img src={micon} alt="" className="icons" />
                    cosmetic@store.com
                </div>
                <div></div><br />

                <div>© 2024 Все права защищены</div>
            </div>
        </div>
    );
}

export default Footer