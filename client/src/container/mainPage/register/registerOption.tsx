import React from 'react'

import HeaderMainPage from '../../../component/mainPage/header/headerMainPage'
import FooterMainPage from '../../../component/mainPage/footer/footerMainPage'
import RegisterOptions from '../../../component/mainPage/register/registerOptions'

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const registerOptions = () => {

    return(
        <Layout className="layout">
        <Header className="header-main-page">
            <HeaderMainPage />
        </Header>
        <Content className="content-main-page">
            <RegisterOptions />
        </Content>
        <Footer className="footer-main-page">
            <FooterMainPage />
        </Footer>
    </Layout>
    )

}

export default registerOptions