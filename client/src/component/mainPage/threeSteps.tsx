import React from "react";

import "./threeSteps.css";
import threeSteps1 from "../../assets/img/mainPage/threeSteps/3steps-1.jpg";
import threeSteps2 from "../../assets/img/mainPage/threeSteps/3steps-2.png";
import threeSteps3 from "../../assets/img/mainPage/threeSteps/3steps-3.jpg";

import { Row, Col, Typography, Card } from "antd";

const threeSteps = () => {
  return (
    <>
      <Row className="threeSteps">
        <Col span={24}>
          <Typography.Title level={2} className="threeSteps-title">
            3 simple steps
          </Typography.Title>
        </Col>
      </Row>
      <Row className="threeSteps-cards">
        <Col offset={2} span={6}>
          <Card hoverable cover={<img alt="example" src={threeSteps1} />}>
            <Card.Meta
              title="Search for a professional"
              description="Thousand professionals are available to give the right support to you. Choice the best professional according with your needs and preferences."
            />
          </Card>
        </Col>
        <Col offset={1} span={6}>
          <Card hoverable cover={<img alt="example" src={threeSteps2} />}>
            <Card.Meta
              title="Choice the better day and time"
              description="Does not matter where you are. You only need have an internet connection. Don't miss an appointment due a travel or skip the time with really matters for you. Pickup the best day and time for you easly."
            />
          </Card>
        </Col>
        <Col offset={1} span={6}>
          <Card hoverable cover={<img alt="example" src={threeSteps3} />}>
            <Card.Meta
              title="Talk with the professional"
              description="Have the best professional support online."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default threeSteps;
