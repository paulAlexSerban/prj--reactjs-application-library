import { Link } from 'react-router-dom';
function App({ components, modules, patterns, products, templates }) {
    return (
        <div>
            {components && (
                <section>
                    <h2>Components</h2>
                    <ul>
                        {components.map((component) => (
                            <li key={component.path}>
                                <Link to={component.path}>{component.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {modules && (
                <section>
                    <h2>Modules</h2>
                    <ul>
                        {modules.map((module) => (
                            <li key={module.path}>
                                <Link to={module.path}>{module.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {patterns && (
                <section>
                    <h2>Patterns</h2>
                    <ul>
                        {patterns.map((pattern) => (
                            <li key={pattern.path}>
                                <Link to={pattern.path}>{pattern.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {templates && (
                <section>
                    <h2>Templates</h2>
                    <ul>
                        {templates.map((template) => (
                            <li key={template.path}>
                                <Link to={template.path}>{template.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {products && (
                <section>
                    <h2>Products</h2>
                    <ul>
                        {products.map((product) => (
                            <li key={product.path}>
                                <Link to={product.path}>{product.name}</Link>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default App;
