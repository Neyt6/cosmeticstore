import React, { } from "react";

const Product = ({ id, product, price,image, click }) => {
    return (
        <div className="">
            <img src={image} className="productImage"></img>
            <div className="">{product}</div><br/>
            <div>{price} pуб.</div>

            <button onClick={() => click()} className="productButton">Подробнее</button>
        </div>
    )
}

export default Product