import React from "react";

import HeaderMainPage from "../../../component/mainPage/header/header";
import FooterMainPage from "../../../component/mainPage/footer/footer";
import SignIn from "../../../component/mainPage/signIn/signIn";

import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const signIn = () => {
  return (
    <Layout className="layout">
      <Header className="header-main-page">
        <HeaderMainPage />
      </Header>
      <Content className="content-main-page">
        <SignIn />
      </Content>
      <Footer className="footer-main-page">
        <FooterMainPage />
      </Footer>
    </Layout>
  );
};

export default signIn;
