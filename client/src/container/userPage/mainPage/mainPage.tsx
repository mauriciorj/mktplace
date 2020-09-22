import React from "react";

import { Layout } from "antd";
import "./mainPage.css";

import HeaderPageUser from "../../../component/userPage/header/header";
import SearchSession from "../../../component/userPage/searchSession/searchSession";
import FooterUserPage from "../../../component/userPage/footer/footer";
import InitialUserPage from "../../../component/userPage/initialPage/initialPage";

const { Header, Content, Footer } = Layout;

const mainPage = () => {
  return (
    <Layout className="layout">
      <Header className="header-user-page">
        <HeaderPageUser />
      </Header>
      <Content className="content-user-page">
        <SearchSession />
        <InitialUserPage />
      </Content>
      <Footer className="footer-user-page">
        <FooterUserPage />
      </Footer>
    </Layout>
  );
};

export default mainPage;
