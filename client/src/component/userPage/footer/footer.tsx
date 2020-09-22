import React from "react";

import { Link } from "react-router-dom";

import "./footer.css";
import { Row, Col, List } from "antd";

import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const footer = () => {
  return (
    <>
      <Row>
        <Col offset={2} span={5}>
          <List header={<strong>PSYCHY</strong>} size="small" bordered={false}>
            <List.Item className="footer-list-no-border">
              <Link to="/registerOptions" className="footer-list-link">
                Create Account
              </Link>
            </List.Item>
            <List.Item className="footer-list-no-border">
              <Link to="/signIn" className="footer-list-link">
                Sign In
              </Link>
            </List.Item>
            <List.Item className="footer-list-no-border">
              <Link to="/pricing" className="footer-list-link">
                Pricing
              </Link>
            </List.Item>
            <List.Item className="footer-list-no-border">
              <Link to="/aboutUs" className="footer-list-link">
                About
              </Link>
            </List.Item>
          </List>
        </Col>
        <Col offset={1} span={5}>
          <List header={<strong>SUPPORT</strong>} size="small" bordered={false}>
            <List.Item className="footer-list-no-border">
              <Link to="/helpCenter" className="footer-list-link">
                Help Center
              </Link>
            </List.Item>
            <List.Item className="footer-list-no-border">
              <Link to="/contactUs" className="footer-list-link">
                Contact Us
              </Link>
            </List.Item>
          </List>
        </Col>
        <Col offset={1} span={5}>
          <List
            header={<strong>FOLLOW US</strong>}
            size="small"
            bordered={false}
          >
            <FacebookOutlined className="footer-main-page-social-icon" />
            <InstagramOutlined className="footer-main-page-social-icon" />
          </List>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="footer-main-page-copyright">
          Copyright © 2020 Sychy. All Rights Reserved
        </Col>
      </Row>
    </>
  );
};
export default footer;
