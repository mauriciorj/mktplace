import React from "react";

import HeaderMainPage from "../../../component/mainPage/header/header";
import FooterMainPage from "../../../component/mainPage/footer/footer";
import ContactUs from "../../../component/mainPage/contactUs/contactUs";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const contactUs = () => {
  return (
    <Layout className="layout">
      <Header className="header-main-page">
        <HeaderMainPage />
      </Header>
      <Content className="content-main-page">
        <ContactUs />
      </Content>
      <Footer className="footer-main-page">
        <FooterMainPage />
      </Footer>
    </Layout>
  );
};

export default contactUs;
