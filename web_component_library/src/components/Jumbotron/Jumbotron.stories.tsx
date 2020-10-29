import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Jumbotron, JumbotronProps } from './Jumbotron';

export default {
	title: 'Components/Jumbotron',
	component: Jumbotron,
} as Meta;

const JumbotronTemplate: Story<JumbotronProps> = (args) => <Jumbotron {...args} />;

export const JumbotronExample = JumbotronTemplate.bind({});
JumbotronExample.args = {
	title: 'Your support any time, any where.',
	text: 'We are here to provide the best support for everyone, any time and everywhere.',
	buttonLabel: 'Create Account',
	imgUrl:
		'https://chopra.brightspotcdn.com/dims4/default/8cb0255/2147483647/strip/true/crop/816x323+0+34/resize/1420x562!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2Fd1%2F28%2F6c397b119d872e61239f0de660bb%2Fsmilingispowerful.jpg',
};
