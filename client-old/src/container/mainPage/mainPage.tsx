import React from 'react'

import { Layout } from 'antd';

import HeaderMainPage from '../../component/mainPage/header/header'
import Jumbotron from '../../component/mainPage/jumbotron'
import ThreeSteps from '../../component/mainPage/threeSteps'
import TalkingAboutUs from '../../component/mainPage/talkingAboutUs'
import FooterMainPage from '../../component/mainPage/footer/footer'

import './mainPage.css'

const { Header, Content, Footer } = Layout;

const mainPage = () => {

    return(
        <Layout className="layout">
            <Header className="header-main-page">
                <HeaderMainPage />
            </Header>
            <Content className="content-main-page">
                <Jumbotron />
                <ThreeSteps />
                <TalkingAboutUs />
            </Content>
            <Footer className="footer-main-page">
                <FooterMainPage />
            </Footer>
        </Layout>
    )
}

export default mainPage