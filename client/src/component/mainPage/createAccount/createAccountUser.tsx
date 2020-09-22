import React, { useState } from "react";

import { Link } from "react-router-dom";

import { days, months, years } from "./dateUtils";
import { countries, caProvinceList, usStatesList } from "./regionUtils";

import "./createAccountUser.css";
import {
  Row,
  Col,
  Typography,
  Breadcrumb,
  Input,
  Form,
  Button,
  Select,
  Radio,
  Checkbox,
  Space,
} from "antd";
import {
  HomeOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";

const dayNumber = days.map((day) => (
  <Select.Option value={day}>{day}</Select.Option>
));

const monthName = months.map((month) => (
  <Select.Option value={month}>{month}</Select.Option>
));

const yearNumber = years.map((year) => (
  <Select.Option value={year}>{year}</Select.Option>
));

const countriesNames = countries.map((country) => (
  <Select.Option value={country}>{country}</Select.Option>
));

const usStates = usStatesList.map((usState) => (
  <Select.Option value={usState}>{usState}</Select.Option>
));

const caProvinces = caProvinceList.map((caProvince) => (
  <Select.Option value={caProvince}>{caProvince}</Select.Option>
));

interface FormCreateUser {
  form: {
    country: {
      select: String;
    };
    state: {
      select: String;
    };
  };
}

const CreateAccountUser = () => {
  const [formCreateUser, setFormCreateUser] = useState<FormCreateUser>({
    form: {
      country: {
        select: "Select your country",
      },
      state: {
        select: "Select your State / Province",
      },
    },
  });

  const selectCountry = (value: String) => {
    setFormCreateUser((prevState) => ({
      ...prevState,
      ...(prevState.form.country.select = value),
    }));
  };

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
              <span> Create Account User</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="createAccountUser-text-row">
        <Col span={14} offset={6} className="createAccountUser-form-col">
          <Typography.Title level={3} className="createAccountUser-title">
            Create Account User
          </Typography.Title>
          <Form
            labelCol={{ span: 5 }}
            layout="horizontal"
            initialValues={{ size: "default" }}
            size="large"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please insert your email." }]}
            >
              <Input type="email" prefix={<MailOutlined />} />
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
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please insert your first name." },
              ]}
            >
              <Input type="text" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please insert your last name." },
              ]}
            >
              <Input type="text" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="birthDay"
              label="Birthday"
              rules={[
                { required: true, message: "Please insert your birthday." },
              ]}
            >
              <Select defaultValue="Year" className="form-year">
                {yearNumber}
              </Select>
              <Select defaultValue="Month" className="form-month">
                {monthName}
              </Select>
              <Select defaultValue="Day" className="form-day">
                {dayNumber}
              </Select>
            </Form.Item>
            <Form.Item name="gender" label="Gender">
              <Radio.Group>
                <Radio value="Female">Female</Radio>
                <Radio value="Male">Male</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input.Group size="large">
                <Row gutter={8}>
                  <Col span={4}>
                    <Input maxLength={3} type="tel" />
                  </Col>
                  <Col span={4}>
                    <Input maxLength={3} type="tel" />
                  </Col>
                  <Col span={5}>
                    <Input maxLength={4} type="tel" />
                  </Col>
                </Row>
              </Input.Group>
            </Form.Item>
            <Form.Item
              name="selectYourCountry"
              label="Select your country"
              rules={[
                { required: true, message: "Please insert your Country." },
              ]}
            >
              <Select
                defaultValue="Select your country"
                onChange={selectCountry}
                className="form-country"
              >
                {countriesNames}
              </Select>
            </Form.Item>
            <Form.Item
              name="selectYourState"
              label="Select your State"
              rules={[
                {
                  required: true,
                  message: "Please insert your State / Province.",
                },
              ]}
            >
              <Select
                className="form-province"
                disabled={
                  formCreateUser.form.country.select === "Select your country"
                    ? true
                    : false
                }
                defaultValue="Select your State / Province"
              >
                {formCreateUser.form.country.select === "Canada"
                  ? caProvinces
                  : usStates}
              </Select>
            </Form.Item>
            <Form.Item
              name="city"
              label="City"
              rules={[
                { required: true, message: "Please insert your city name." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address1"
              label="Address"
              rules={[
                { required: true, message: "Please insert your address." },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="address2" label="Address 2">
              <Input />
            </Form.Item>
            <Form.Item
              name="zipCode"
              label="Zip Code"
              rules={[
                { required: true, message: "Please insert your zip code." },
              ]}
            >
              <Input className="form-zipcode" />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 5, span: 12 }}
              className="read-document"
            >
              <Checkbox>I agree with all conditions and terms.</Checkbox>
              <Space className="read-document-checkbox">
                <Typography.Text>
                  *Click here to read the document
                </Typography.Text>
              </Space>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 7 }}>
              <Button type="primary" htmlType="submit">
                Create Account
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CreateAccountUser;
