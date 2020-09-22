import React from "react";
import { Link } from "react-router-dom";

import "./registerOptions.css";

import { Row, Col, Button, Typography, Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

const registerOptions = () => {
  return (
    <>
      <Row>
        <Col offset={2} span={22}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <HomeOutlined />
                <span> Home</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <UserOutlined />
              <span> Register Options</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Title level={3} className="registerOptions-title">
            Are you a client or a professional?
          </Typography.Title>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="registerOptions-first-button-options">
          <Button size="large" type="primary" ghost>
            <Link to="createAccountUser">I'm a user</Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8} className="registerOptions-line-div" />
      </Row>
      <Row>
        <Col span={24} className="registerOptions-second-button-options">
          <Button size="large" danger>
            I'm a professional
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default registerOptions;
