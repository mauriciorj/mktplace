import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Col, Row, Typography } from 'antd'

import { SettingOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons'

import './headerUserPage.css'

const headerMainPage = () => {

    return (
        <Row>
            <Col span={8} offset={1}>
                <Typography.Title level={3} className="logo-title"><Link to="/userMainPage" className="header-logo-title">Psychy</Link></Typography.Title>
            </Col>
            <Col span={14}>
                <Menu mode="horizontal" className="menu-header">
                    <Menu.SubMenu key="SubMenu" className="sub-menu-header" icon={<MenuOutlined />} title="Mauricio M.">
                        <Menu.Item key="setting:1" className="sub-menu-item-header">Settings <SettingOutlined /></Menu.Item>
                        <Menu.Item key="setting:2" className="sub-menu-item-header"><Link to="/logOutUser">Log Out <LogoutOutlined /></Link></Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Col>
        </Row>
    )

}

export default headerMainPage