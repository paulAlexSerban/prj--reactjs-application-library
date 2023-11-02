import Heading from '../atoms/Heading';

const Section = ({ children, ...props }) => {
    return (
        <section className="rea-section" {...props}>
            <Heading level={2} {...props} />
            {children}
        </section>
    );
};

export default Section;
