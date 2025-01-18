import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered my passion for programming early on and have enjoyed
              building innovative solutions ever since. 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like{" "}
              <i>
                <b className="purple">C, Python, JavaScript, and Java.</b>
              </i>
              <br />
              <br />
              My fields of interest include building new{" "}
              <i>
                <b className="purple">Web Technologies and Products</b> and
                exploring areas related to{" "}
                <b className="purple">Innovation.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for{" "}
              <b className="purple">Innovation</b> and{" "}
              <b className="purple">Product Growth</b>, along with developing
              impactful solutions using{" "}
              <i>
                <b className="purple">Modern Tools and Frameworks</b>
              </i>{" "}
              such as{" "}
              <i>
                <b className="purple">Design Thinking, Flutter, and Python.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Muhaitheef"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/itisMohd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhaitheef/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:your-email@example.com"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+123456789"
                  className="icon-colour home-social-icons"
                >
                  <MdPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
