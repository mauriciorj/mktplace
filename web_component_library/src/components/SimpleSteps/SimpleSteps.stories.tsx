import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { SimpleSteps, SimpleStepsProps } from './SimpleSteps';

import threeSteps1 from '../assets/img/threeSteps/3steps-1.jpg';
import threeSteps2 from '../assets/img/threeSteps/3steps-2.png';
import threeSteps3 from '../assets/img/threeSteps/3steps-3.jpg';

export default {
	title: 'Components/SimpleSteps',
	component: SimpleSteps,
} as Meta;

const SimpleStepsTemplate: Story<SimpleStepsProps> = (args) => <SimpleSteps {...args} />;

export const MainSimpleSteps = SimpleStepsTemplate.bind({});
MainSimpleSteps.args = {
	mainTitle: '3 simple steps',
	cardsInfo: [
		{
			url: threeSteps1,
			title: 'Search for a professional',
			description:
				'Thousand professionals are available to give the right support to you. Choice the best professional according with your needs and preferences.',
		},
		{
			url: threeSteps2,
			title: 'Choice the better day and time',
			description:
				'Does not matter where you are. You only need have an internet connection. Don\'t miss an appointment due a travel or skip the time with really matters for you. Pickup the best day and time for you easly.',
        },
        {
			url: threeSteps3,
			title: 'Talk with the professional',
			description:
				'Have the best professional support online.',
		},
	],
};
