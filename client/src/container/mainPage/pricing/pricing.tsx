import React from "react";

import HeaderMainPage from "../../../component/mainPage/header/header";
import FooterMainPage from "../../../component/mainPage/footer/footer";
import Pricing from "../../../component/mainPage/pricing/pricing";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const pricing = () => {
  return (
    <Layout className="layout">
      <Header className="header-main-page">
        <HeaderMainPage />
      </Header>
      <Content className="content-main-page">
        <Pricing />
      </Content>
      <Footer className="footer-main-page">
        <FooterMainPage />
      </Footer>
    </Layout>
  );
};

export default pricing;
