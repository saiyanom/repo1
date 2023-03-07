import React from "react";
import { Link } from "~components";
import { Col, Container, Row } from "react-bootstrap";
import ErrorPage from "./style";
import errorImage from "~image/mixed/404.png";
export default function Error() {
  return (
    <ErrorPage backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-xl-6 col-lg-7 col-md-8 col-xs-10">
            <ErrorPage.Image className="error-page__image text-center">
              <img className="w-100" src={errorImage.src} alt />
            </ErrorPage.Image>
            <ErrorPage.BigTitle as="h1">404</ErrorPage.BigTitle>
            <ErrorPage.Title>Page not found</ErrorPage.Title>
            <ErrorPage.Text>
              The page you are looking for is not available or
              <br className="d-none d-xs-block" /> doesn’t belong to this
              website!
            </ErrorPage.Text>
            <a href="/" className="btn-readical-red btn-1" to="/index.js">
              Go to homepage
            </a>
          </Col>
        </Row>
      </Container>
    </ErrorPage>
  );
}
