import React from 'react';

import { GlobalState } from '../../context/Context';

import './users.css';

const Users = () => {
    const { users, search } = GlobalState();

    return (
        <div data-testid='users'>
            {!users ?
                <p>Loading... </p> :
                users
                    .filter((elem) => {
                        if (search === '') {
                            return elem;
                        } else if (elem.name.toLowerCase().includes(search.toLowerCase())) {
                            return elem;
                        }
                        return false;
                    }).map((elem, key) => (
                        <ul data-testid={`user-index-${key}`} key={key} className='users-container'>
                            <li className='users-second_plan_elem'>{key + 1 + '.'}</li>
                            <li className='users-first_plan_elem'>{elem.name}</li>
                            <li className='users-second_plan_elem'>{'@' + elem.username} </li>
                        </ul>
                    ))}
        </div>
    );
};

export default Users;