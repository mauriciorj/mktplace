import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Jumbotron as JumbotronComponent, JumbotronProps } from './Jumbotron';

import jumbotronImg from '../assets/img/jumbotron/jumbotronImg.jpg';

export default {
	title: 'Components/Jumbotron',
	component: JumbotronComponent,
} as Meta;

const JumbotronTemplate: Story<JumbotronProps> = (args) => <JumbotronComponent {...args} />;

export const Jumbotron = JumbotronTemplate.bind({});
Jumbotron.args = {
	title: 'Your support any time, any where.',
	text: 'We are here to provide the best support for everyone, any time and everywhere.',
	buttonLabel: 'Create Account',
	imgUrl: jumbotronImg
};
