import Card from '../UI/Card';
import classes from './UsersList.module.scss';

const UsersList = ({ users }) => (
    <Card className={classes.users}>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>
);

export default UsersList;
