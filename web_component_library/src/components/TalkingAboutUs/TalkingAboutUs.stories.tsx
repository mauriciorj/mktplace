import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { TalkingAboutUs as TalkingAboutUsComponent, TalkingAboutUsProps } from './TalkingAboutUs';

import threeSteps1 from '../assets/img/talkingAboutUs/p1.png';
import threeSteps2 from '../assets/img/talkingAboutUs/p2.png';
import threeSteps3 from '../assets/img/talkingAboutUs/p3.png';

export default {
	title: 'Components/TalkingAboutUs',
	component: TalkingAboutUsComponent,
} as Meta;

const TalkingAboutUsTemplate: Story<TalkingAboutUsProps> = (args) => <TalkingAboutUsComponent {...args} />;

export const TalkingAboutUs = TalkingAboutUsTemplate.bind({});
TalkingAboutUs.args = {
	mainTitle: 'What our users are talking about us',
	cardsInfo: [
		{
			url: threeSteps1,
			title: 'Flirck, Paul',
			description:
				'Pyschy completely changed my life. I found the best doctor and I can talk without leave my home.',
		},
		{
            url: threeSteps2,
            title: 'Green, Ann',
			description:
				'I never had appointment with a psychologist before and my experience was amazing. I really like to recommend Psychy to everyone.',
        },
        {
            url: threeSteps3,
            title: 'Bart, John',
			description:
				'As a entrepreneur I never thought a psychologist could help me to improve my professionals results. Pyschy changed my game.',
		},
	],
};
