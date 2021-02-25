import PropTypes from "prop-types";
import React from "react";

import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";

import Product from "../Product/Product";

import "./Menu.scss";

const Menu = ({ menuInfo, addProductBasket }) => (
  <div className="menuComponent">
    {menuInfo.map((menu) => (
      <ListGroup key={menu.Oid}>
        <ListGroupItem>
          <ListGroupItemHeading>
            {menu.DisplayName ? menu.DisplayName : ""}
          </ListGroupItemHeading>
        </ListGroupItem>
        {menu.Products
          ? menu.Products.map((product, index) => (
              <Product
                key={product.ProductId}
                addProductBasket={addProductBasket}
                product={product}
                index={index}
              />
            ))
          : ""}
      </ListGroup>
    ))}
  </div>
);

export default Menu;

Menu.propTypes = {
  menuInfo: PropTypes.array.isRequired,
  addProductBasket: PropTypes.func.isRequired,
};
