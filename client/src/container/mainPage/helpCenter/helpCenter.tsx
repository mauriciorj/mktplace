import React from 'react'

import HeaderMainPage from '../../../component/mainPage/header/headerMainPage'
import FooterMainPage from '../../../component/mainPage/footer/footerMainPage'
import HelpCenter from '../../../component/mainPage/helpCenter/helpCenter'

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const helpCenter = () => {

    return (
        <Layout className="layout">
            <Header className="header-main-page">
                <HeaderMainPage />
            </Header>
            <Content className="content-main-page">
                <HelpCenter />
            </Content>
            <Footer className="footer-main-page">
                <FooterMainPage />
            </Footer>
        </Layout>
    )

}

export default helpCenter