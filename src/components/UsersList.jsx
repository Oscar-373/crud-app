import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div className='container col-7 text-center'>
            <h2>User List</h2>
            
            <ul className='list-group'>
             {users.map((user) => (
                <li key={user.id}>
                    <div className='card'>
                        <h3>
                            {user.first_name} {user.last_name}
                        </h3>
                        <p>
                            {user.email}
                        </p>
                        <p>
                            {user.birthday}
                        </p>
                        <div className='buttons'>
                            <button className='btn btn-warning' onClick={() => selectUser(user)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button> 
                        </div>
                    </div>
                </li> 
            ))}
            </ul>
    
        </div>
    );
};

export default UsersList;