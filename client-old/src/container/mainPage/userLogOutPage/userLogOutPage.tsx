import React from 'react'

import { Layout } from 'antd';

import HeaderMainPage from '../../../component/mainPage/header/header'
import SeeYouSoon from '../../../component/mainPage/seeYouSoon/seeYouSoon'
import FooterMainPage from '../../../component/mainPage/footer/footer'

import './userLogOutPage.css'

const { Header, Content, Footer } = Layout;

const userLogOutPage = () => {

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

export default userLogOutPage