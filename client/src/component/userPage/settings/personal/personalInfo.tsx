import React from "react";
import { Link } from "react-router-dom";

import defaultAvatar from "../../../../assets/img/avatar/default-avatar.jpg";

import {
  Row,
  Col,
  Image,
  Button,
  Descriptions,
  Space,
  Divider,
  Breadcrumb,
} from "antd";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import "./personalInfo.css";

const personalInfo = () => {
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
              <UserOutlined />
              <span> Personal Information</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col offset={1}>
          <Image src={defaultAvatar} width={100} />
        </Col>
        <Col offset={1} className="space-align">
          <Space align="center" direction="horizontal">
            Mc Fly Coffee, Johnny
          </Space>
        </Col>
      </Row>
      <Row>
        <Col offset={1} span={12}>
          <Divider plain />
        </Col>
      </Row>
      <Row justify="start">
        <Col offset={1} span={15} className="col-editInfo">
          <Descriptions title="Personal Information">
            <Descriptions.Item label="First Name" span={15}>
              Johnny
            </Descriptions.Item>
            <Descriptions.Item label="Last Name" span={15}>
              Mc Fly Coffee
            </Descriptions.Item>
            <Descriptions.Item label="Birth Day" span={15}>
              20-12-1990
            </Descriptions.Item>
            <Descriptions.Item label="Gender" span={15}>
              Male
            </Descriptions.Item>
            <Descriptions.Item label="Phone" span={15}>
              (777) 555-3322
            </Descriptions.Item>
            <Descriptions.Item label="Country" span={15}>
              Canada
            </Descriptions.Item>
            <Descriptions.Item label="Address" span={15}>
              100 Starway street
            </Descriptions.Item>
            <Descriptions.Item label="Address 2" span={15}>
              unit 10
            </Descriptions.Item>
            <Descriptions.Item label="Zip Code" span={15}>
              U3R 4J6
            </Descriptions.Item>
          </Descriptions>
          <Button type="primary" className="button-editInfo">
            Edit Info
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default personalInfo;
