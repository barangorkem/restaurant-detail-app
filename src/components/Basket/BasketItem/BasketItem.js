import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "reactstrap";

import "./BasketItem.scss";

import deleteProductImage from '../../../img/delete-product.png';

const BasketItem = ({
  product,
  pieces,
  addProductBasket,
  deleteProductBasket,
}) => {
  const [pieceValue, setPieceValue] = useState(1);

  useEffect(() => {
    setPieceValue(pieces);
  }, [pieces]);

  return (
    <div className="basketItem">
      <Row className="basketItemRow">
        <Col
          className="menuContent"
          xl="7"
          lg="7"
          md="7"
          sm="7"
          xs="6"
          style={{ padding: "0px" }}
        >
          <h4>{product.DisplayName}</h4>
          <p>{product.Description}</p>
        </Col>
        <Col className="inputContent" xl="2" lg="2" md="2" sm="2" xs="3">
          <Input
            type="text"
            value={pieceValue}
            onChange={(e) => {
              setPieceValue(e.target.value.replace(/[^0-9]/g, ""));
              if (e.target.value !== "" && e.target.value > 0) {
                addProductBasket(product, e.target.value);
              }
            }}
          />
        </Col>
        <Col xl="3" lg="3" md="3" sm="3" xs="3" className="priceContent">
          <h4>
            {pieces * parseFloat(product.ExtendedPrice.replace(",", "."))}
            TL
          </h4>
          <img
            onClick={() => {
              deleteProductBasket(product.ProductId);
            }}
            src={deleteProductImage}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default BasketItem;

BasketItem.propTypes = {
  deleteProductBasket: PropTypes.func.isRequired,
  addProductBasket: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  pieces: PropTypes.number.isRequired,
};
