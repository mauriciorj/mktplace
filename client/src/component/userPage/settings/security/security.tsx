import React from "react";
import { Link } from 'react-router-dom'

import {
  Row,
  Col,
  Button,
  Descriptions,
  Form,
  Input,
  Divider,
  Typography,
  Breadcrumb
} from "antd";

import { HomeOutlined, SettingOutlined, LockOutlined } from '@ant-design/icons'

import "./security.css";

const securityInfo = () => {
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
              <LockOutlined />
              <span> Security</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row justify="start">
        <Col offset={1} span={15}>
          <Typography.Title level={5}>Security</Typography.Title>
          <Descriptions>
            <Descriptions.Item label="Email" className="security-email">
              johnnyjohnnyjohnny@johnnyjohnny.com
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={12}>
          <Divider plain />
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={12}>
          <Typography.Title level={5} className="change-pass-title">
            Change your password
          </Typography.Title>
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 17 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
          >
            <Form.Item
              name="oldPassword"
              label="Old Password"
              rules={[
                { required: true, message: "Please insert your old password." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="newPassword1"
              label="New Password"
              rules={[
                { required: true, message: "Please insert a new password." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="newPassword2"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "Please insert again your new password.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Change
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default securityInfo;
