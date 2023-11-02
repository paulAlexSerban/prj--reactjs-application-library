import '@prj--reactjs-component-lib/generic-lsg/lib/atoms/heading.css';

const Heading = ({ title, subtitle, level, align = 'center' }) => {
    const HeadingTag = `h${level}`;
    return (
        <HeadingTag className={`heading heading--${level} heading--align-${align}`}>
            {title}
            {subtitle && <span>{subtitle}</span>}
        </HeadingTag>
    );
};

Heading.defaultProps = {
    level: 2,
};

export default Heading;
