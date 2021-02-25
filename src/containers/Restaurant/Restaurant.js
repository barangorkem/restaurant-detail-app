import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { GET_RESTAURANT_DATA } from "../../redux/types/restaurant";
import {
  ADD_PRODUCT_BASKET,
  DELETE_PRODUCT_BASKET,
  GET_MENU_DATA,
} from "../../redux/types/menu";

// components
import Basket from "../../components/Basket/Basket";
import RestaurantInfo from "../../components/Restaurant/Info/Info";
import Menu from "../../components/Restaurant/Menu/Menu";

const Restaurant = (props) => {
  useEffect(() => {
    props.getRestaurantInfo();
    props.getMenuInfo();
  }, []);

  return (
    <div className="restaurantPage">
      <Row>
        <Col xl="3">
          <Basket
            deleteProductBasket={props.deleteProductBasket}
            addProductBasket={props.addProductBasket}
            basket={props.basket}
          />
        </Col>
        <Col xl="9">
          <Row>
            <Col xl="12">
              <RestaurantInfo
                restaurantInfo={
                  props.restaurantInfo ? props.restaurantInfo : {}
                }
              />
            </Col>
            <Col xl="12">
              <Menu
                addProductBasket={props.addProductBasket}
                menuInfo={props.menuInfo ? props.menuInfo : []}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    restaurantInfo: state.restaurant.restaurantInfo,
    menuInfo: state.menu.menuInfo,
    basket: state.menu.basket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurantInfo: () => {
      return dispatch({ type: GET_RESTAURANT_DATA });
    },
    getMenuInfo: () => {
      return dispatch({ type: GET_MENU_DATA });
    },
    addProductBasket: (product, pieces) => {
      return dispatch({
        type: ADD_PRODUCT_BASKET,
        value: {
          product: product,
          pieces: pieces,
        },
      });
    },
    deleteProductBasket: (productId) => {
      return dispatch({ type: DELETE_PRODUCT_BASKET, value: productId });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);

Restaurant.propTypes = {
  getRestaurantInfo: PropTypes.func,
  getMenuInfo: PropTypes.func,
  deleteProductBasket: PropTypes.func,
  addProductBasket: PropTypes.func,
  basket: PropTypes.array,
  restaurantInfo: PropTypes.object,
  menuInfo: PropTypes.array,
};
