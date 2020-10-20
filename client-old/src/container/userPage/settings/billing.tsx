import React from "react";

import HeaderPageUser from "../../../component/userPage/header/header";
import UserSettingsSideBar from "../../../component/userPage/settings/sideBar/sideBar";
import Billing from "../../../component/userPage/settings/billing/billing";
import FooterUserPage from "../../../component/userPage/footer/footer";

import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const settingsPersonal = () => {
  return (
    <Layout className="layout">
      <Header className="header-user-page">
        <HeaderPageUser />
      </Header>
      <Layout>
        <Sider className="user-settings-sidebar">
          <UserSettingsSideBar />
        </Sider>
        <Content className="content-user-page">
          <Billing />
        </Content>
      </Layout>
      <Footer className="footer-user-page">
        <FooterUserPage />
      </Footer>
    </Layout>
  );
};

export default settingsPersonal;
