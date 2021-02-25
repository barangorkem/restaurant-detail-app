import PropTypes from "prop-types";
import React from "react";
import "./Info.scss";
import { Row, Col } from "reactstrap";
import restaurantLogo from "../../../img/restaurant-logo.png";
import rozetLogo from "../../../img/rozet-logo.png";
import motorCycle from "../../../img/motorcycle.png";
import minPrice from "../../../img/min-price.png";
import rightArrow from "../../../img/right-arrow.png";

const RestaurantInfo = ({ restaurantInfo }) => (
  <div className="restaurantInfoComponent">
    <Row className="restaurantInfoRow">
      <Col xl="2">
        <img src={restaurantLogo} alt="" />
      </Col>
      <Col xl="6">
        <h4 className="restaurantAddress">
          {`${restaurantInfo.DisplayName ? restaurantInfo.DisplayName : ""} (
                            ${
                              restaurantInfo.DeliveryArea
                                ? restaurantInfo.DeliveryArea.AreaName
                                : ""
                            }
                        )
                        `}

          {/* X-Force Burger & Pizza, Arnavutköy İlçesi (Mustafa Kemal Paşa Mah.) */}
        </h4>
        <div className="groupItem" style={{ display: "flex" }}>
          <div className="rozet">
            <img src={rozetLogo} alt="" />
          </div>
          <div className="properties">
            <span className="propertyTitle">Hız</span>
            <span className="propertyScore">{restaurantInfo.Speed}</span>
          </div>
          <div className="properties">
            <span className="propertyTitle">Servis</span>
            <span className="propertyScore">{restaurantInfo.Serving}</span>
          </div>
          <div className="properties">
            <span className="propertyTitle">Lezzet</span>
            <span className="propertyScore">{restaurantInfo.Flavour}</span>
          </div>
          <div className="priceAndTime">
            <img src={minPrice} alt="" />
            <span className="contentTitle">Min. Tutar</span>
            <span className="contentValue">
              {restaurantInfo.DeliveryArea
                ? restaurantInfo.DeliveryArea.MinimumPrice
                : ""}{" "}
              TL
            </span>
          </div>
          <div className="priceAndTime">
            <img src={motorCycle} alt="" />
            <span className="contentTitle">Servis Süresi</span>
            <span className="contentValue">
              {restaurantInfo.DeliveryArea
                ? restaurantInfo.DeliveryArea.DeliveryTime
                : ""}{" "}
              dk.
            </span>
          </div>
        </div>
      </Col>
      <Col xl="12">
        <h4 className="restaurantCategoryPath">
          İstanbul Yemek Siparişi
          <img src={rightArrow} alt="" />
          Burger
        </h4>
      </Col>
    </Row>
  </div>
);

export default RestaurantInfo;

RestaurantInfo.propTypes = {
  restaurantInfo: PropTypes.object.isRequired,
};
