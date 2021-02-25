import PropTypes from "prop-types";
import React from "react";
import { Row, Col } from "reactstrap";

import "./Basket.scss";

import basketIcon from "../../img/basket-icon.png";
import BasketItem from "./BasketItem/BasketItem";

const Basket = ({ basket, addProductBasket, deleteProductBasket }) => (
  <div className="basketComponent">
    <Row>
      <Col xl="12">
        <h6 className="basketTitle">YEMEK SEPETİM</h6>
      </Col>
      <Col xl="12">
        <p className="basketAddress">Şişli (Esentepe Mah. - Plazalar.)</p>
      </Col>
      <Col xl="12" className="basketList">
        {basket.length > 0 ? (
          basket.map((item) => (
            <BasketItem
              key={item.product.ProductId}
              deleteProductBasket={deleteProductBasket}
              addProductBasket={addProductBasket}
              product={item.product}
              pieces={item.pieces}
            />
          ))
        ) : (
          <div className="basketEl">
            <img src={basketIcon} alt="" />
            <span className="basketEmpty">Sepetiniz Henüz Boş</span>
          </div>
        )}
      </Col>
      {basket.length > 0 && (
        <Col xl="12" className="totalPrice">
          <div className="priceItems">
            <h6>Toplam</h6>
            <h6>
              {basket.reduce(
                (totalPrice, item) =>
                  totalPrice +
                  item.pieces *
                    parseFloat(item.product.ExtendedPrice.replace(",", ".")),
                0
              )}
              TL
            </h6>
          </div>
        </Col>
      )}
    </Row>
  </div>
);

export default Basket;

Basket.propTypes = {
  deleteProductBasket: PropTypes.func.isRequired,
  addProductBasket: PropTypes.func.isRequired,
  basket: PropTypes.array.isRequired,
};
