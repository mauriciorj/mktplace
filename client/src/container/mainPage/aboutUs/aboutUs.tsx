import React from "react";

import HeaderMainPage from "../../../component/mainPage/header/header";
import FooterMainPage from "../../../component/mainPage/footer/footer";
import AboutUs from "../../../component/mainPage/aboutUs/aboutUs";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const aboutUs = () => {
  return (
    <Layout className="layout">
      <Header className="header-main-page">
        <HeaderMainPage />
      </Header>
      <Content className="content-main-page">
        <AboutUs />
      </Content>
      <Footer className="footer-main-page">
        <FooterMainPage />
      </Footer>
    </Layout>
  );
};

export default aboutUs;
