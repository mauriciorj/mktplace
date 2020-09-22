import React from "react";

import { Link } from "react-router-dom";

import { Row, Col, Breadcrumb, Typography, Form, Input, Button } from "antd";

import {
  HomeOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const signIn = () => {
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
              <ReadOutlined />
              <span> Sing In</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="contactUs-text-row">
        <Col span={12} offset={6} className="contactUs-form-col">
          <Typography.Title level={3} className="contactUs-title">
            Sign In
          </Typography.Title>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 17 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
            size="large"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please insert your email." }]}
            >
              <Input prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please insert your password." },
              ]}
            >
              <Input.Password
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Sing In
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default signIn;
