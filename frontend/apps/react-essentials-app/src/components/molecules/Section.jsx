import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/heading.css';
import { Heading } from '@prj--reactjs-component-lib/generic-lib';

const Section = ({ children, title, ...props }) => {
    return (
        <section className="rea-section" {...props}>
            <Heading level={2} title={title} />
            {children}
        </section>
    );
};

export default Section;
