import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer as FooterComponent, FooterProps } from './Footer';

export default {
    title: 'Components/Footer',
    component: FooterComponent,
} as Meta;

const FooterTemplate: Story<FooterProps> = (args) => <FooterComponent {...args} />;

export const Footer = FooterTemplate.bind({});
Footer.args = {
    footerLinks: [{
		title: 'PSYCHY',
        links: ['Create Account', 'Sign In', 'Pricing', 'About']
    },
    {
		title: 'SUPPORT',
        links: ['Help Center', 'Contact Us']
    },
    {
        title: 'FOLLOW US',
        social: ['Facebook', 'Instagram']
    },
],
	copyrightLabel: 'Copyright © 2020 Sychy. All Rights Reserved'
}