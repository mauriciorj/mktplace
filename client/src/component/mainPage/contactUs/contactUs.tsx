import React from "react";

import { Link } from "react-router-dom";

import "./contactUs.css";
import { Row, Col, Typography, Breadcrumb, Input, Form, Button } from "antd";
import { HomeOutlined, MailOutlined } from "@ant-design/icons";

const contactUs = () => {
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
              <MailOutlined />
              <span> Contact Us</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="contactUs-text-row">
        <Col span={12} offset={6} className="contactUs-form-col">
          <Typography.Title level={3} className="contactUs-title">
            Contact Us
          </Typography.Title>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 17 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
            size="large"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please insert your name." }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please insert your email." }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="yourMessage"
              label="Your Message"
              rules={[{ required: true, message: "Please insert your text." }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default contactUs;
