import CORE_CONCEPTS from './data/core-concepts.json';

import '@prj--reactjs-component-lib/generic-lsg/lib/global.css';
import '@prj--reactjs-component-lib/generic-lsg/lib/products/reactEssentials.css';

import Header from './components/organisms/Header';
import Section from './components/organisms/Section';
import CardList from './components/molecules/CardList';
import Card from './components/molecules/Card';

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
                <Section heading="Core Concepts">
                    <CardList>
                        {CORE_CONCEPTS.map((coreConcept, index) => (
                            <Card key={index} {...coreConcept} />
                        ))}
                    </CardList>
                </Section>
            </main>
        </>
    );
};

export default App;
