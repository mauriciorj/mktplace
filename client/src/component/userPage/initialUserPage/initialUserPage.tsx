import React from 'react'

import { Row, Col, Typography } from 'antd'

import './initialUserPage.css'

const initialUserPage = () => {

    return (
        <>
            <Row>
                <Col offset={3} span={18} className="initialUserPage-title">
                    <Typography.Title>Welcome, Mauricio</Typography.Title>
                </Col>
            </Row>
        </>
    )

}

export default initialUserPage