import React from 'react'

import { Link } from 'react-router-dom'

import './aboutUs.css'
import { Row, Col, Typography, Breadcrumb } from 'antd'
import { HomeOutlined, ReadOutlined } from '@ant-design/icons'

const aboutUs = () => {

    return(
        <>
        <Row>
                <Col offset={2} span={22}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">
                            <HomeOutlined />
                                <span> Home</span>
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <ReadOutlined />
                            <span> About Us</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className="aboutUs-title-row">
                <Col span={21} offset={3}><Typography.Title level={3} className="aboutUs-title">About Us</Typography.Title></Col>
            </Row>
            <Row className="aboutUs-text-row">
                <Col span={20} offset={4}><Typography.Title level={5} className="aboutUs-text">Psychy was creted to help people around the world in many different psychologic areas.</Typography.Title></Col>
            </Row>
        </>
    )

}

export default aboutUs