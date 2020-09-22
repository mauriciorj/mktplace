import React from 'react'

import { Row, Col, Typography } from 'antd'

import './seeYouSoon.css'

const seeYouSoon = () => {

    return (
        <>
            <Row>
                <Col offset={3} span={18} className="see-you-title">
                    <Typography.Title level={2}>We hope to see you soon!</Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col offset={3} span={18} className="see-you-sub-title">
                    <Typography.Title level={3}>Take care :)</Typography.Title>
                </Col>
            </Row>
        </>
    )

}

export default seeYouSoon