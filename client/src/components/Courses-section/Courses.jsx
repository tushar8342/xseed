import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/courseImg1.jpeg";
import courseImg2 from "../../assests/images/courseImg2.jpg";
import courseImg3 from "../../assests/images/courseImg3.jpeg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Short Stories for Kids: Guide for Teachers & Parents",
    lesson: 10,
    students: 22.3,
    rating: 7.7,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Social Studies for Kids",
    lesson: 12,
    students: 18.57,
    rating: 6.0,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Flashcards for Kids",
    lesson: 14,
    students: 10.5,
    rating: 7.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
