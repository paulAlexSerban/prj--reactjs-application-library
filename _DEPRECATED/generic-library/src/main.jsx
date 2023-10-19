import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ConceptCards from './system/products/concept-cards/ConceptCards';
import ExpenseTracker from './system/products/expense-tracker/ExpenseTracker';
import InvestmentCalculator from './system/products/investment-calculator/InvestmentCalculator';
import UserAgeForm from './system/products/user-age-form/UserAgeForm';
import LoginForm from './system/products/login-form/LoginForm';
import './index.scss';
const products = [
    {
        name: 'Concept Cards',
        path: '/products/concept-cards',
        component: ConceptCards,
    },
    {
        name: 'Expense Tracker',
        path: '/products/expense-tracker',
        component: ExpenseTracker,
    },
    {
        name: 'Investment Calculator',
        path: '/products/investment-calculator',
        component: InvestmentCalculator,
    },
    {
        name: 'User Age Form',
        path: '/products/user-age-form',
        component: UserAgeForm,
    },
    {
        name: 'Login Form',
        path: '/products/login-form',
        component: LoginForm,
    },
];

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App products={products} />,
        },
        ...products.map((product) => ({
            path: product.path,
            element: <product.component />,
        })),
    ],
    { basename: import.meta.env.DEV ? '/' : '/prj--reactjs-component-lib/' }
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
