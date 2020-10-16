import React from 'react';

import { Menu, Col, Typography } from 'antd';

export interface HeaderProps {
  /**
   * Header Links
   */
    headerTitle: string;
}

export const Header: React.FC<HeaderProps> = ({
    headerTitle
}: HeaderProps) => {
    return(
        <>
            <Col span={8}>
                <Typography.Title level={3} className="logo-title">Psychy</Typography.Title>
            </Col>
            <Col span={14}>
                <Menu mode="horizontal" className="menu-header">
                    <Menu.Item key={1}>{headerTitle}</Menu.Item>
                </Menu>
            </Col>
        </>
    )
}