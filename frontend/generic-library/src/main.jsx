import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ConceptCards from './system/products/concept-cards/ConceptCards';

const products = [
    {
        name: 'Concept Cards',
        path: '/products/concept-cards',
        component: ConceptCards,
    },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <App products={products} />,
    },
    ...products.map((product) => ({
        path: product.path,
        element: <product.component />,
    })),
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
