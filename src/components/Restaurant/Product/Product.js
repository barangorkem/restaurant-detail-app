import PropTypes from "prop-types";
import React, { useState } from "react";

import { ListGroupItem, Row, Col, Input, Button } from "reactstrap";

import addIcon from "../../../img/add-icon.png";

const Product = ({ product, index, addProductBasket }) => {
  const [pieces, setPieces] = useState(1);

  return (
    <ListGroupItem key={index}>
      <Row>
        <Col xl="1" lg="1" sm="2" md="2" xs="4" className="increment">
          <Input
            type="text"
            value={pieces}
            onChange={(e) => {
              setPieces(e.target.value.replace(/[^0-9]/g, ""));
            }}
          />
          <Button
            onClick={() => {
              if (pieces !== "") {
                addProductBasket(product, pieces);
              }
            }}
          >
            <img src={addIcon} alt="" />
          </Button>
        </Col>
        <Col xl="8" lg="8" sm="8" md="8" xs="5" className="menuContent">
          <h4>{product.DisplayName ? product.DisplayName : ""}</h4>
          <p> {product.Description ? product.Description : ""} </p>
        </Col>
        <Col xl="3" lg="3" sm="2" md="2" xs="3" className="menuPrice">
          <h4>
            {product.ExtendedPrice ? product.ExtendedPrice : ""}
            TL
          </h4>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  addProductBasket: PropTypes.func.isRequired,
};
