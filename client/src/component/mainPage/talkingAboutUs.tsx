import React from "react";

import { Link } from "react-router-dom";

import "./talkingAboutUs.css";

import { Row, Col, Typography, Card, Button } from "antd";

import threeSteps1 from "../../assets/img/mainPage/talkingAboutUs/p1.png";
import threeSteps2 from "../../assets/img/mainPage/talkingAboutUs/p2.png";
import threeSteps3 from "../../assets/img/mainPage/talkingAboutUs/p3.png";

const talkingAboutUs = () => {
  return (
    <>
      <Row className="talkingAboutUs">
        <Col span={24}>
          <Typography.Title level={2} className="threeSteps-title">
            What our users are talking about us
          </Typography.Title>
        </Col>
      </Row>
      <Row className="talkingAboutUs-cards">
        <Col offset={2} span={6}>
          <Card
            bordered={false}
            cover={
              <img
                alt="example"
                src={threeSteps1}
                className="talkingAboutUs-card-image"
              />
            }
          >
            <Card.Meta
              title="Flirck, Paul"
              description="Pyschy completely changed my life. I found the best doctor and I can talk without leave my home."
            />
          </Card>
        </Col>
        <Col offset={1} span={6}>
          <Card
            bordered={false}
            cover={
              <img
                alt="example"
                src={threeSteps2}
                className="talkingAboutUs-card-image"
              />
            }
          >
            <Card.Meta
              title="Green, Ann"
              description="I never had appointment with a psychologist before and my experience was amazing. I really like to recommend Psychy to everyone."
            />
          </Card>
        </Col>
        <Col offset={1} span={6}>
          <Card
            bordered={false}
            cover={
              <img
                alt="example"
                src={threeSteps3}
                className="talkingAboutUs-card-image"
              />
            }
          >
            <Card.Meta
              title="Bart, John"
              description="As a entrepreneur I never thought a psychologist could help me to improve my professionals results. Pyschy changed my game."
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="talkingAboutUs-button">
          <Link to="/registerOptions">
            <Button type="primary" shape="round">
              Create Account
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default talkingAboutUs;
