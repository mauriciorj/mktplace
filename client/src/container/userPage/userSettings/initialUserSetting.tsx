import React from 'react'

import HeaderPageUser from '../../../component/userPage/headerUserPage/headerUserPage'
import UserSettingsSideBar from '../../../component/userPage/userSettings/userSettingsSideBar'
import FooterUserPage from '../../../component/userPage/footerUserPage/footerUserPage'

import './initialUserSetting'
import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout;

const initialUserSetting = () => {

    return (
        <Layout className="layout">
            <Header className="header-user-page">
                <HeaderPageUser />
            </Header>
            <Layout>
                <Sider className="user-settings-sidebar">
                    <UserSettingsSideBar />
                </Sider>
                <Content className="content-user-page">Content</Content>
            </Layout>
            <Footer className="footer-user-page">
                <FooterUserPage />
            </Footer>
        </Layout>
    )

}

export default initialUserSetting