import { Paragraph } from '@prj--reactjs-component-lib/generic-lib/lib/index';

import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/paragraph.css';

const meta = {
    title: 'Generic/Atoms/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['xs', 'sm', 'base', 'lg', 'xl'],
        },
    },
};

export const Default = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        size: 'base',
    },
};

export default meta;
