import React, { } from "react";

const Product = ({ id, product, price, image, click }) => {
    return (
        <div className="product">
            <img src={image} className="productImage" alt=""></img>
            <div className="">{product}</div><br />
            <div>{price} pуб. </div>

            <button onClick={() => click()} className="productButton">Подробнее</button>
        </div>
    )
}

export default Product