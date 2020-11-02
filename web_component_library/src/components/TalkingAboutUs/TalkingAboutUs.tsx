import React from 'react';

import { Row, Col, Typography, Card } from 'antd';
import './talkingAboutUs.css';

export interface TalkingAboutUsProps {
	/**
	 * Session Title
	 */
	mainTitle: string;
	/**
	 * Cards Information
	 *
	 * urL: photo url
	 * title: card title
	 * text: card text
	 */
	cardsInfo: {
		url: string;
		title: string;
		description: string;
	}[];
}

export const TalkingAboutUs: React.FC<TalkingAboutUsProps> = ({
	mainTitle,
	cardsInfo,
}: TalkingAboutUsProps) => {
	return (
		<>
			<Row className="threeSteps">
				<Col span={24}>
					<Typography.Title level={2} className="threeSteps-title">
						{mainTitle}
					</Typography.Title>
				</Col>
			</Row>
			<Row className="threeSteps-cards">
				{cardsInfo.map((info, id) => (
					<Col key={id} offset={(id === 0) ? 2 : 1} span={6}>
						<Card hoverable cover={<img alt={info.title} src={info.url} />}>
							<Card.Meta
								title={info.title}
								description={info.description}
							/>
						</Card>
					</Col>
				))}
			</Row>
		</>
	);
};
