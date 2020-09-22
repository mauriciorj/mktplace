import React from "react";

import { Link } from "react-router-dom";

import "./pricing.css";
import { Row, Col, Typography, Breadcrumb } from "antd";
import { HomeOutlined, DollarCircleOutlined } from "@ant-design/icons";

const pricing = () => {
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
              <DollarCircleOutlined />
              <span> Pricing</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="pricing-title-row">
        <Col span={21} offset={3}>
          <Typography.Title level={3} className="pricing-title">
            Pricing
          </Typography.Title>
        </Col>
      </Row>
      <Row className="pricing-text-row">
        <Col span={20} offset={4}>
          <Typography.Title level={5} className="pricing-text">
            Here goes the price.
          </Typography.Title>
        </Col>
      </Row>
    </>
  );
};

export default pricing;
