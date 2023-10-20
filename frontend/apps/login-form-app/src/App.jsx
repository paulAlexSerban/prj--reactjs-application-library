import { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
import { loginForm } from './LoginForm.module.scss';
import { AuthContextProvider } from './store/auth-context';

import '@prj--reactjs-component-lib/generic-lsg/lib/global.css';

function LoginFormCmp() {
    const ctx = useContext(AuthContext);

    return (
        <div className={loginForm}>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </div>
    );
}

const LoginFrom = () => {
    return (
        <AuthContextProvider>
            <LoginFormCmp />
        </AuthContextProvider>
    );
};

const App = () => {
    return <LoginFrom />;
};

export default App;

/**
 * Login with any valid email and any password of 7 characters or more.
 */
