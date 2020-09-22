import React from "react";
import { Link } from "react-router-dom";

import "./sideBar.css";

import { Col, Row, List, Typography } from "antd";
import {
  UserOutlined,
  UnlockOutlined,
  DollarOutlined,
  HomeOutlined
} from "@ant-design/icons";

const sideBar = () => {
  return (
    <Row className="user-settings-sidebar">
      <Col offset={2} className="test">
      <Typography.Text className="side-bar-home-title"><HomeOutlined /> Home</Typography.Text>
        <List header={<strong>Settings</strong>} size="small" bordered={false}>
          <List.Item className="user-settings-list-no-border">
            <Link
              to="/user/settings/personal"
              className="user-settings-list-link"
            >
              <UserOutlined /> Personal
            </Link>
          </List.Item>
          <List.Item className="user-settings-list-no-border">
            <Link
              to="/user/settings/security"
              className="user-settings-list-link"
            >
              <UnlockOutlined /> Security
            </Link>
          </List.Item>
          <List.Item className="user-settings-list-no-border">
            <Link
              to="/user/settings/billing"
              className="user-settings-list-link"
            >
              <DollarOutlined /> Billing
            </Link>
          </List.Item>
        </List>
      </Col>
    </Row>
  );
};

export default sideBar;
