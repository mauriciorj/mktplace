import React from "react";
import { Link } from "react-router-dom";

import { Row, Col, Descriptions, Typography, Breadcrumb } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  DollarOutlined,
} from "@ant-design/icons";

import "./billing.css";

const billingInfo = () => {
  return (
    <>
      <Row className="settings-breadcrumb">
        <Col offset={1} span={23}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/user/mainPage">
                <HomeOutlined />
                <span> Home</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/user/settings/personal">
                <SettingOutlined />
                <span> Settings </span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <DollarOutlined />
              <span> Billing</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row justify="start">
        <Col offset={1} span={15}>
          <Typography.Title level={5}>Billing Information</Typography.Title>
          <Descriptions>
            <Descriptions.Item
              label="Card"
              className="security-email"
              span={15}
            >
              Visa
            </Descriptions.Item>
            <Descriptions.Item
              label="Number"
              className="security-email"
              span={15}
            >
              **** - 1111
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};

export default billingInfo;
