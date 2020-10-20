import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import './jumbotron.css'
import jumbotronImg from '../../assets/img/mainPage/jumbotron/jumbotronImg.jpg'

import { Row, Col, Typography, Image } from 'antd'

import { Client } from '../../prismic/prismic-configuration'

import { Button } from 'web_component_library'

interface DocPrismic {
    doc: any
}

const Jumbotron = () => {

    const [doc, setDocData] = useState<DocPrismic | null>({ doc: null })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Client.getSingle('mainpage-jumbotron', {})
                if (response) {
                    setDocData({ doc: response })
                }
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    console.log(doc)

    return (
        <>
            <Row justify="start">
                <Col span={9} offset={2} className="jumbotron-main-page-left-side">
                    <Typography.Title level={2} className="jumbotron-main-page-left-title">Your support any time, any where.</Typography.Title>
                    <br />
                    <Typography.Title level={4} className="jumbotron-main-page-left-sub-title">We are here to provide the best support for everyone, any time and everywhere.</Typography.Title>
                    <br />
                    <Link to="/registerOptions"><Button>Create Account</Button></Link>
                </Col>
                <Col span={10} offset={1}>
                    <Image src={jumbotronImg} />
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2} className="jumbotron-main-page-bottom-border"></Col>
            </Row>
        </>
    )

}

export default Jumbotron