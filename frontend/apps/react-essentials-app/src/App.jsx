import { ConceptCard, ConceptHeader } from '@prj--reactjs-component-lib/generic-lib';

import '@prj--reactjs-component-lib/generic-lsg/lib/global.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/products/conceptCards.css';

const concepts = [
    {
        title: 'Components',
        image: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/components-original.webp',
        description:
            'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
        title: 'State',
        image: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/state-original.webp',
        description:
            'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
        title: 'Events',
        image: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/events-original.webp',
        description:
            'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
];

const App = () => {
    return (
        <div className="conceptCards">
            <ConceptHeader imgSrc="https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/key-concepts-original.webp" />
            <ul id="concepts">
                {concepts.map((concept) => (
                    <ConceptCard image={concept.image} title={concept.title} description={concept.description} />
                ))}
            </ul>
        </div>
    );
};

export default App;
