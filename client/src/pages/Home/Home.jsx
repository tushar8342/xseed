import React, { Fragment } from "react";

import Headers from "../../components/Header/Header"

import HeroSection from "../../components/Hero-Section/HeroSection";
import AboutUs from "../../components/About-us/AboutUs";
import Courses from "../../components/Courses-section/Courses";
import ChooseUs from "../../components/Choose-us/ChooseUs";

import Testimonials from "../../components/Testimonial/Testimonials";

import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Headers />
      <Content />
      <Courses />
      <HeroSection />
      <AboutUs />
      <ChooseUs />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
