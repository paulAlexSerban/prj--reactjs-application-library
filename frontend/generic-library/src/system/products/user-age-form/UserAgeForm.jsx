import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './UserAgeForm.scss';
function UserAgeForm() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
        });
    };

    return (
        <div className='userAgeForm'>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default UserAgeForm;
