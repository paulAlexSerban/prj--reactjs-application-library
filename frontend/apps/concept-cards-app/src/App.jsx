import { ConceptCard, ConceptHeader } from '@prj--reactjs-component-lib/generic-lib';

import keyConceptsImage from '@prj--reactjs-component-lib/media-assets/dist/images/key-concepts-original.webp';
import componentsImage from '@prj--reactjs-component-lib/media-assets/dist/images/components-original.webp';
import stateImage from '@prj--reactjs-component-lib/media-assets/dist/images/state-original.webp';
import eventsImage from '@prj--reactjs-component-lib/media-assets/dist/images/events-original.webp';

import '@prj--reactjs-component-lib/generic-lsg/lib/global.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/products/conceptCards.css';

const concepts = [
    {
        title: 'Components',
        image: componentsImage,
        description:
            'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
        title: 'State',
        image: stateImage,
        description:
            'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
        title: 'Events',
        image: eventsImage,
        description:
            'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
];

const App = () => {
    return (
        <div className="conceptCards">
            <ConceptHeader imgSrc={keyConceptsImage} />
            <ul id="concepts">
                {concepts.map((concept) => (
                    <ConceptCard image={concept.image} title={concept.title} description={concept.description} />
                ))}
            </ul>
        </div>
    );
};

export default App;
