import React from 'react';

import { Row, Col, Typography, Image } from 'antd';
import { Button } from '../Button/Button';
import './jumbotron.css';

export interface JumbotronProps {
	/**
	 * Jumbotron Title
	 */
    title: string,
    /**
	 * Jumbotron Text
	 */
    text: string,
    /**
	 * Jumbotron Button Label
	 */
    buttonLabel: string,
    /**
	 * Jumbotron Img Url
	 */
	imgUrl: string
}

/**
 * Primary UI component for user interaction
 */
export const Jumbotron: React.FC<JumbotronProps> = ({ title, text, buttonLabel, imgUrl }: JumbotronProps) => {
	return (
		<>
			<Row justify="start">
				<Col span={9} offset={2} className="jumbotron-main-page-left-side">
					<Typography.Title level={2} className="jumbotron-main-page-left-title">
						{title}
					</Typography.Title>
					<br />
					<Typography.Title level={4} className="jumbotron-main-page-left-sub-title">
						{text}
					</Typography.Title>
					<br />
					<Button type="primary" shape="round" label={buttonLabel} />
				</Col>
				<Col span={10} offset={1}>
					<Image src={imgUrl} />
				</Col>
			</Row>
			<Row>
				<Col span={20} offset={2} className="jumbotron-main-page-bottom-border"></Col>
			</Row>
		</>
	);
};
