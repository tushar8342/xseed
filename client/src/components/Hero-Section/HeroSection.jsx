import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">

                For every student,
                <br /> every classroom. <br />
                Real results.
              </h2>
              <p className="mb-5">
                We’re a nonprofit with the mission to provide a free,   <br />world-class education for anyone, anywhere<br /> Lorem ipsum dolor sit amet consectetur 
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
