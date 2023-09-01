function App({ components, modules, patterns, products, templates }) {
    return (
        <div>
            {components && (
                <section>
                    <h2>Components</h2>
                    <ul>
                        {components.map((component) => (
                            <li key={component.path}>
                                <a href={component.path}>{component.name}</a>
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
                                <a href={module.path}>{module.name}</a>
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
                                <a href={pattern.path}>{pattern.name}</a>
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
                                <a href={template.path}>{template.name}</a>
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
                                <a href={product.path}>{product.name}</a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}

export default App;
