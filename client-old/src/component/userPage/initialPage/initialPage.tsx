import React from 'react'

import { Row, Col, Typography } from 'antd'

import { useQuery } from '@apollo/react-hooks'
import { ALL_USERS } from '../../../graphql/users'

import './initialPage.css'

const InitialPage = () => {

    const { loading, error, data } = useQuery(ALL_USERS)
    console.log(loading)
    console.log(error)
    console.log(data)

    return (
        <>
            {(loading) ?
                <Row>
                    <Col offset={3} span={18} className="initialUserPage-title">
                        <Typography.Title>Loading...</Typography.Title>
                    </Col>
                </Row> :
                <Row>
                    <Col offset={3} span={18} className="initialUserPage-title">
                        <Typography.Title>Welcome, Mauricio</Typography.Title>
                    </Col>
                </Row>
            }
        </>
    )

}

export default InitialPage