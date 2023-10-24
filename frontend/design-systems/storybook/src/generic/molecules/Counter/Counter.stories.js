import { Counter } from '@prj--reactjs-component-lib/generic-lib/lib/index';

import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/button.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/organisms/counter.css';


const meta = {
    title: 'Generic/Molecules/Counter',
    component: Counter,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export default meta;

export const Base = {
    args: {},
};
