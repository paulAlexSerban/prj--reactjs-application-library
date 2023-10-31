import '@prj--reactjs-component-lib/generic-lsg/lib/organisms/rea-section.css';

const Section = ({ children, heading, ...props }) => {
    return (
        <section className="rea-section" {...props}>
            {heading && <h2 className="rea-section__heading">{heading}</h2>}
            {children}
        </section>
    );
};

export default Section;
