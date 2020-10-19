import React from 'react';

import { Menu, Col, Typography } from 'antd';

export interface HeaderProps {
	/**
	 * Header Links
     * 
     * Type of header link
     * Default: it's a simple link on header
     * Highligh: it's a highlighted link on header
     * Button: transform a link in a button
	
	 */
    headerLinks: {
        headerTitle: string
        type: 'Default' | 'Highlight' | 'Button'
        link: string
    }[]
    /**
	 * Header Logo
     * 
     * Type of logo
     * Text: it's a simple text
     * Image: it's a image
     * AltText: ref text of this logo
     * Url: url for logo
	
	 */
    logoInfo: {
        type: 'Text' | ' Image'
        title: string
        altText: string
        link: string
    }[]
}

export const Header: React.FC<HeaderProps> = ({ logoInfo, headerLinks }: HeaderProps) => {
	return (
		<>
			<Col span={8}>
				<Typography.Title level={3} className="logo-title">
                    {logoInfo.map(logo => 
                    (logo.type === 'Text') ?
                    logo.title :
                    'IMAGE')}
				</Typography.Title>
			</Col>
			<Col span={14}>
				<Menu mode="horizontal" className="menu-header">
                    {headerLinks.map(header => 
                        (header.type === 'Default')?
                        <Menu.Item key={1}>{header.headerTitle}</Menu.Item> :
                        (header.type === 'Highligh') ?
                        <Menu.Item key={1}><strong>{header.headerTitle}</strong></Menu.Item> :
                        <Menu.Item key={1}><i>{header.headerTitle}</i></Menu.Item>
                    )}
				</Menu>
			</Col>
		</>
	);
};
