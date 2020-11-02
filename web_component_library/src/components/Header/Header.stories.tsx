import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Header as HeaderComponent, HeaderProps } from './Header';

export default {
	title: 'Components/Header',
	component: HeaderComponent,
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (args) => <HeaderComponent {...args} />;

export const Header = HeaderTemplate.bind({});
Header.args = {
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
