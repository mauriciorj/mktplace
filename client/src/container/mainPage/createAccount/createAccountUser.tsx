import React from 'react'

import HeaderMainPage from '../../../component/mainPage/header/headerMainPage'
import FooterMainPage from '../../../component/mainPage/footer/footerMainPage'
import CreateAccountUser from '../../../component/mainPage/createAccount/createAccountUser'

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const createAccountUser = () => {

    return (
        <Layout className="layout">
            <Header className="header-main-page">
                <HeaderMainPage />
            </Header>
            <Content className="content-main-page">
                <CreateAccountUser />
            </Content>
            <Footer className="footer-main-page">
                <FooterMainPage />
            </Footer>
        </Layout>
    )

}

export default createAccountUser