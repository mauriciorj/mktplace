import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from './Header';

export default {
    title: 'Example/Header',
    component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {
    logoInfo: [{type: 'Text', title: 'Pyschy', altText: 'Pyschy, the best solution'}],
    headerLinks: [{headerTitle: 111, type: 'Button'}]
};