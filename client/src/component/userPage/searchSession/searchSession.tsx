import React from 'react'

import { Row, Col, Input } from 'antd'

const searchSession = () => {

    return (
        <Row>
            <Col span={18} offset={3}>
                <Input.Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </Col>
        </Row>
    )

}

export default searchSession