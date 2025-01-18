import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiGit,
} from "react-icons/di";
import {
  SiTensorflow,
  SiScikitlearn,
  SiPostgresql,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiFirebase,
} from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
    </Row>
  );
}

export default Techstack;