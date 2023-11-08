import Section from '../molecules/Section';
import CardList from '../molecules/CardList';
import Card from '../molecules/Card';

import '@prj--reactjs-component-lib/generic-lsg/lib/organisms/teaserList.css';

const TeaserList = ({ cards, title, ...props }) => {
    return (
        <Section className="teaserList" align="center" title={title} {...props}>
            <div className="teaserList__container">
                <CardList className="cardList--teaser-list" {...props}>
                    {cards.map((coreConcept, index) => (
                        <Card key={index} {...coreConcept} />
                    ))}
                </CardList>
            </div>
        </Section>
    );
};

export default TeaserList;
