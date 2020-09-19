import React from 'react'
import { Link } from 'react-router-dom'

import './settingsSideBar.css'

import { Col, Row, List } from 'antd'
import { UserOutlined, UnlockOutlined, DollarOutlined } from '@ant-design/icons'

const settingsSideBar = () => {

    return (
        <Row className="user-settings-sidebar">
            <Col offset={2} span={5}>
                <List header={<strong>Settings</strong>} size="small" bordered={false}>
                    <List.Item className="user-settings-list-no-border"><Link to="/userSettingsPersonal" className="user-settings-list-link"><UserOutlined /> Personal</Link></List.Item>
                    <List.Item className="user-settings-list-no-border"><Link to="/userSettingsSecurity" className="user-settings-list-link"><UnlockOutlined /> Security</Link></List.Item>
                    <List.Item className="user-settings-list-no-border"><Link to="/userSettingsBilling" className="user-settings-list-link"><DollarOutlined /> Billing</Link></List.Item>
                </List>
            </Col>
        </Row>
    )


}

export default settingsSideBar