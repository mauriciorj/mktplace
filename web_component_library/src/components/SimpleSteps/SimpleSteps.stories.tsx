import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { SimpleSteps, SimpleStepsProps } from './SimpleSteps';

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
			url:
				'https://chopra.brightspotcdn.com/dims4/default/8cb0255/2147483647/strip/true/crop/816x323+0+34/resize/1420x562!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2Fd1%2F28%2F6c397b119d872e61239f0de660bb%2Fsmilingispowerful.jpg',
			title: 'Search for a professional',
			description:
				'Thousand professionals are available to give the right support to you. Choice the best professional according with your needs and preferences.',
		},
		{
			url:
				'https://chopra.brightspotcdn.com/dims4/default/8cb0255/2147483647/strip/true/crop/816x323+0+34/resize/1420x562!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2Fd1%2F28%2F6c397b119d872e61239f0de660bb%2Fsmilingispowerful.jpg',
			title: 'Choice the better day and time',
			description:
				'Does not matter where you are. You only need have an internet connection. Don\'t miss an appointment due a travel or skip the time with really matters for you. Pickup the best day and time for you easly.',
        },
        {
			url:
				'https://chopra.brightspotcdn.com/dims4/default/8cb0255/2147483647/strip/true/crop/816x323+0+34/resize/1420x562!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2Fd1%2F28%2F6c397b119d872e61239f0de660bb%2Fsmilingispowerful.jpg',
			title: 'Talk with the professional',
			description:
				'Have the best professional support online.',
		},
	],
};
