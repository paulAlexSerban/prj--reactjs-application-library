import { Button } from '@prj--reactjs-component-lib/generic-lib/lib/index';

import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/button.css';

const meta = {
    title: 'Generic/Atoms/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        radius: {
            control: {
                type: 'select',
            },
            options: ['squared', 'rounded'],
        },
    },
};

export default meta;

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
        radius: 'rounded',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
        radius: 'rounded',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
        radius: 'rounded',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
        radius: 'rounded',
    },
};
