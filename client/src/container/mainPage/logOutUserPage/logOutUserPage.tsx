import React from 'react'

import { Layout } from 'antd';

import HeaderMainPage from '../../../component/mainPage/header/headerMainPage'
import SeeYouSoon from '../../../component/mainPage/seeYouSoon/seeYouSoon'
import FooterMainPage from '../../../component/mainPage/footer/footerMainPage'

import './logOutUserPage.css'

const { Header, Content, Footer } = Layout;

const mainPage = () => {

    return(
        <Layout className="layout">
            <Header className="header-main-page">
                <HeaderMainPage />
            </Header>
            <Content className="content-main-page">
                <SeeYouSoon />
            </Content>
            <Footer className="footer-main-page">
                <FooterMainPage />
            </Footer>
        </Layout>
    )
}

export default mainPage