import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
} from "reactstrap";

import "./Header.scss";

import headerLogo from "../../img/yemeksepeti-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="headerComponent">
      <Navbar expand="md">
        <Container>
          <NavbarBrand>
            <img src={headerLogo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar />
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
