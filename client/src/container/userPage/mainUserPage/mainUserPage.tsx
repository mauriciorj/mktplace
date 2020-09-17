import React from 'react'

import { Layout } from 'antd';
import './mainUserPage.css'

import HeaderPageUser from '../../../component/userPage/headerUserPage/headerUserPage'
import SearchSession from '../../../component/userPage/searchSession/searchSession'
import FooterUserPage from '../../../component/userPage/footerUserPage/footerUserPage'
import InitialUserPage from '../../../component/userPage/initialUserPage/initialUserPage'

const { Header, Content, Footer } = Layout;

const mainPageUser = () => {

    return(
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
    )

}

export default mainPageUser