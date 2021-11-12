import React from 'react';

// imported function
import { GlobalState } from '../../context/Context';

//imported styles
import './users.css';

const Users = () => {
    // variables needed to map and filter users
    const { users, search } = GlobalState();

    return (
        <div data-testid='users'>
            {!users ?
            // text before fetch data
                <p>Loading... </p> :
                users
                // filtering function
                    .filter((elem) => {
                        // if input from searchBar is empty filter does not work and shows all data
                        if (search === '') {
                            return elem;
                        //otherwise it filtering by name
                        } else if (elem.name.toLowerCase().includes(search.toLowerCase())) {
                            return elem;
                        }
                        return false;
                    // map by name and username
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