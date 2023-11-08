import '@prj--reactjs-application-library/generic-lsg/lib/atoms/heading.css';
import { Heading } from '@prj--reactjs-application-library/generic-lib';

const Section = ({ children, title, ...props }) => {
    return (
        <section className="rea-section" {...props}>
            <Heading level={2} title={title} style={{ color: '#a18aba' }} />
            {children}
        </section>
    );
};

export default Section;
