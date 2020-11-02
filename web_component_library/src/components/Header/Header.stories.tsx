import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from './Header';

export default {
	title: 'Components/Header',
	component: Header,
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (args) => <Header {...args} />;

export const MainHeader = HeaderTemplate.bind({});
MainHeader.args = {
	logoInfo: [{ 
        type: 'Text', 
        title: 'Pyschy', 
        altText: 'Pyschy, the best solution' 
    }],
	headerLinks: [{ 
        headerTitle: 'About Us', 
        type: 'Default' 
    },
    {
        headerTitle: 'FAQ', 
        type: 'Default' 
    },
    {
        headerTitle: 'Pricing', 
        type: 'Default' 
    },
    {
        headerTitle: 'Contact Us', 
        type: 'Default' 
    },
    {
        headerTitle: 'Sign In', 
        type: 'Highlight' 
    },
    {
        headerTitle: 'Create Account', 
        type: 'Button' 
    }
],
};
