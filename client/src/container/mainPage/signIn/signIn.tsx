import React from 'react'

import HeaderMainPage from '../../../component/mainPage/header/headerMainPage'
import FooterMainPage from '../../../component/mainPage/footer/footerMainPage'
import SignIn from '../../../component/mainPage/signIn/signIn'

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const createAccountUser = () => {

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
    )

}

export default createAccountUser