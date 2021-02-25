import PropTypes from "prop-types";
import React from "react";
import {Container} from "reactstrap";
import Header from "../components/Header/Header";

const Layout = ({children}) => <div className="layoutPage">
    <Header/>
    <Container style={{
        marginTop:"20px"
    }}> {children} </Container>
</div>;


export default Layout;

Layout.propTypes = {
    "children": PropTypes.node.isRequired
};
