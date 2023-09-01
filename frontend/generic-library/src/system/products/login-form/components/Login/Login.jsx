import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
import classes from './Login.module.scss';

// Reducer function for email input
const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        // Update the email value and check if it's valid (contains '@')
        return { value: action.val, isValid: action.val.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        // Check the email value for validity when it loses focus
        return { value: state.value, isValid: state.value.includes('@') };
    }
    // Default state when no action type matches
    return { value: '', isValid: false };
};

// Reducer function for password input
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        // Update the password value and check if it's valid (length > 6)
        return {
            value: action.val,
            isValid: action.val.trim().length > 6,
        };
    }
    if (action.type === 'INPUT_BLUR') {
        // Check the password value for validity when it loses focus
        return {
            value: state.value,
            isValid: state.value.trim().length > 6,
        };
    }
    // Default state when no action type matches
    return {
        value: '',
        isValid: false,
    };
};

const Login = (props) => {
    // State to manage overall form validity
    const [formIsValid, setFormIsValid] = useState(false);

    // UseReducer for email input state, using emailReducer
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });

    // UseReducer for password input state, using passwordReducer
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    // Access the authentication context
    const authCtx = useContext(AuthContext);

    // Create refs for email and password inputs
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // Effect for checking form validity
    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity!');
            // Set formIsValid to true only if both email and password are valid
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log('CLEANUP');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    // Destructure email and password validity from their respective states
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    // Handler for email input change
    const emailChangeHandler = (event) => {
        // Dispatch USER_INPUT action to update email state
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    };

    // Handler for password input change
    const passwordChangeHandler = (event) => {
        // Dispatch USER_INPUT action to update password state
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    };

    // Handler for email input blur (losing focus)
    const validateEmailHandler = () => {
        // Dispatch INPUT_BLUR action to check email validity
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    // Handler for password input blur (losing focus)
    const validatePasswordHandler = () => {
        // Dispatch INPUT_BLUR action to check password validity
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    // Handler for form submission
    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            // If the entire form is valid, call the login function from the context
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            // If email is not valid, focus on the email input
            emailInputRef.current.focus();
        } else {
            // If password is not valid, focus on the password input
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                {/* Email input */}
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                {/* Password input */}
                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    {/* Submit button */}
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
