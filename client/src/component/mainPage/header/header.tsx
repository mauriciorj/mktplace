import React from 'react'
import { Link } from 'react-router-dom'

import { Menu, Col, Row, Button, Typography } from 'antd'

import './header.css'

const header = () => {

    return (
        <Row justify="start">
            <Col span={8} offset={1}>
            <Typography.Title level={3} className="logo-title"><Link to="/" className="header-logo-title">Psychy</Link></Typography.Title>
            </Col>
            <Col span={14}>
                <Menu mode="horizontal" className="menu-header">
                    <Menu.Item key="1"><Link to="/aboutUs">About Us</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/helpCenter">FAQ</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/pricing">Pricing</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="contactUs">Contact Us</Link></Menu.Item>
                    <Menu.Item key="5" className="menu-header-sign-in"><Link to="signin">Sign In</Link></Menu.Item>
                    <Menu.Item key="6" className="menu-header-item-button"><Link to="/registerOptions"><Button type="primary" shape="round">Create Account</Button></Link></Menu.Item>
                </Menu>
            </Col>
        </Row>
    )

}

export default header