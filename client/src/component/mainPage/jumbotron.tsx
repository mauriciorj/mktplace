import React from "react";

import { Link } from "react-router-dom";

import "./jumbotron.css";
import jumbotronImg from "../../assets/img/mainPage/jumbotron/jumbotronImg.jpg";

import { Row, Col, Button, Typography, Image } from "antd";

const jumbotron = () => {
  return (
    <>
      <Row justify="start">
        <Col span={9} offset={2} className="jumbotron-main-page-left-side">
          <Typography.Title
            level={2}
            className="jumbotron-main-page-left-title"
          >
            Your support any time, any where.
          </Typography.Title>
          <br />
          <Typography.Title
            level={4}
            className="jumbotron-main-page-left-sub-title"
          >
            We are here to provide the best support for everyone, any time and
            everywhere.
          </Typography.Title>
          <br />
          <Link to="/registerOptions">
            <Button type="primary" shape="round">
              Create Account
            </Button>
          </Link>
        </Col>
        <Col span={10} offset={1}>
          <Image src={jumbotronImg} />
        </Col>
      </Row>
      <Row>
        <Col
          span={20}
          offset={2}
          className="jumbotron-main-page-bottom-border"
        />
      </Row>
    </>
  );
};

export default jumbotron;
