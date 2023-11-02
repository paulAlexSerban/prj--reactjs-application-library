import CORE_CONCEPTS from './data/core-concepts';
import CONCEPT_EXAMPLES from './data/concept-examples';
import '@prj--reactjs-component-lib/generic-lsg/lib/global.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/products/reactEssentials.css';

import Header from './components/organisms/Header';
import TeaserList from './components/organisms/TeaserList';
import Examples from './components/organisms/Examples';

// Dynamic content example
import choice from '@prj--reactjs-component-lib/shared-utils-js/src/arrays/choice';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const dynamicDescription = choice(reactDescriptions);

const headerImg = {
    headingText: 'React Essentials',
    imgSrc: 'https://s3.eu-central-1.amazonaws.com/assets.reactjs-component-lib.eu/images/react-core-concepts-original.webp',
    imgAlt: 'Stylized atom.',
    descriptionText: `${dynamicDescription} React concepts you will need for almost any app you are going to build!`,
};

const App = () => {
    return (
        <>
            <Header {...headerImg} />
            <main className="rea-main">
                <TeaserList title="Core Concepts" cards={CORE_CONCEPTS} />
                <Examples title="Examples" data={CONCEPT_EXAMPLES} />
            </main>
        </>
    );
};

export default App;
