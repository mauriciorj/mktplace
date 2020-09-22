import React from "react";

import { Link } from "react-router-dom";

import "./helpCenter.css";
import { Row, Col, Typography, Breadcrumb, Collapse } from "antd";
import { HomeOutlined, QuestionCircleOutlined } from "@ant-design/icons";

const helpCenter = () => {
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
              <QuestionCircleOutlined />
              <span> Help Center</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="helpCenter-title-row">
        <Col span={21} offset={3}>
          <Typography.Title level={3} className="helpCenter-title">
            Help Center
          </Typography.Title>
        </Col>
      </Row>
      <Row className="helpCenter-text-row">
        <Col span={14} offset={4}>
          <Collapse accordion>
            <Collapse.Panel header="Question 1" key="1">
              <p>Answer for question 1</p>
            </Collapse.Panel>
            <Collapse.Panel header="Question 2" key="2">
              <p>Answer for question 2</p>
            </Collapse.Panel>
            <Collapse.Panel header="Question 3" key="3">
              <p>Answer for question 3</p>
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
    </>
  );
};

export default helpCenter;
