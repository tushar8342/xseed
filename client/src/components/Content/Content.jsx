import React, { useState } from "react";
import "./Content.css";
import { Container, Row, Col } from "reactstrap";
import english from "../../assests/images/english-speech.png"
import funfact from "../../assests/images/funfact.jpg"
import ReactPlayer from "react-player";
import Quiz from "../Quiz/Quiz";
// import CourseCard from "../Courses-section/CourseCard";

const videoData = [
  {
    id: "01",
    title: "Guide for Teachers & Parents",
    url: "https://youtu.be/YXwnKgSXFKE"
  },

  {
    id: "02",
    title: "For Kids",
    url: "https://youtu.be/mgNIhdGyjx4"
  },

  {
    id: "03",
    title: "Kids Flashcards ",
    url: "https://youtu.be/NtzftGb0EcM"
  },
  {
    id: "04",
    title: "Funfact ",
    url: "https://youtu.be/4NkFMkgh0wY"
  },
  {
    id: "04",
    title: "Fuzzle for Kit ",
    url: "https://youtu.be/3E7PQSfVs0U"
  },
];



const Content = () => {

  const [showtab, setShowtab] = useState(1);
  const [showVideo, setShowVideo] = useState(false);



  const handletab = (e) => {
    setShowtab(e);
  }
  return (
    <section>
      <Container>
        <div className="row">
          <h2 className="mt-3 mb-3">Scope of Physics</h2>
          <div className="col-sm-12 bg-light">

            <ul class="nav nav-pills mb-3 mt-1 bg-dark" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button className={showtab === 1 ? "nav-link active" : "nav-link"} onClick={() => handletab(1)}>Lessons</button>
              </li>
              <li class="nav-item" role="presentation">
                <button className={showtab === 2 ? "nav-link active" : "nav-link"} onClick={() => handletab(2)}>Videos</button>
              </li>

              <li class="nav-item" role="presentation">
                <button className={showtab === 3 ? "nav-link active" : "nav-link"} onClick={() => handletab(3)}>Quiz</button>
              </li>
            </ul>

            <div class="tab-content text-dark" id="pills-tabContent">

              {/* start tab 1*/}
              <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} >
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={english}
                      alt="Educational Image"
                      className="education-image "
                    />
                  </div>
                  <div className="col-md-6">
                    <h2 className="education-headline">Education Headline</h2>
                    <p className="education-description">
                      <b>Looking for some Good Topics for Kids to Write About?</b>  Oh yeah. You are in luck. Writing is a great way to improve a child’s writing skills and using these 25 good writing topics should get them off to an excellent start. Read on to see more!
                    </p>
                  </div>
                  <div>
                    <br />
                    <p>
                      Oh yeah. I have some great writing ideas for your kids.

                      <p>You see…</p>

                      Writing is a fun way to pass the time for both adults and children alike. But finding just the right writing topics that will inspire a young students’ creativity can pose a challenge to parents and teachers of any grade.</p>
                    <p>What would happen if you were responsible for looking after your baby brother while your parents were out for dinner and you accidentally locked yourself in the basement? What would you do? How would you escape?
                      Explain what you think makes diamonds so valuable.
                      Nearly every neighborhood has a haunted house. Write about a creepy old house in yours.
                      Imagine that you are the last survivor of a shipwreck, and you are now stranded on an island and there’s a storm coming. Describe the weather using all of your senses and explain how you keep yourself safe until the storm ends.</p>
                  </div>
                  <Col lg="6" md="6">
                    <div className="choose__img">
                      {showVideo ? (
                        <ReactPlayer
                          url="https://www.youtube.com/watch?v=8Nq7ykkorzE"
                          controls
                          width="100%"
                          height="350px"
                        />
                      ) : (
                        <img src={funfact} alt="" className="w-100" />
                      )}

                      {!showVideo && (
                        <span className="play__icon">
                          <i
                            class="ri-play-circle-line"
                            onClick={() => setShowVideo(!showVideo)}
                          ></i>
                        </span>
                      )}
                    </div>
                  </Col>
                </div>

              </div>
              {/* close tab 1*/}


              {/* start tab 2*/}
              <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"} >
                <Row>
                  <Col lg="12" className="mb-5">
                    <div className="course__top d-flex justify-content-between align-items-center">
                      <div className="course__top__left w-50">
                      </div>

                    </div>
                  </Col>
                  {videoData.map((item) => (
                    <Col lg="4" md="6" sm="6">
                      <ReactPlayer
                        url={item.url}
                        controls
                        width="100%"
                        height="350px"
                      />
                      <h2>{item.title}</h2>
                    </Col>
                  ))}
                </Row>

              </div>
              {/* close tab 2*/}


              {/* start tab 3*/}
              <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"} >

                <Quiz />


              </div>
              {/* close tab 3*/}


            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default Content;
