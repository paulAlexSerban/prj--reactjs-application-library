import { Rating } from '@prj--reactjs-component-lib/generic-lib/lib/index';

import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/star.css';

const meta = {
    title: 'Generic/Molecules/Rating',
    component: Rating,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        number: { control: 'number' },
    },
};

export default meta;

export const FiveStars = {
    args: {
        number: 5,
    },
};
