import React from 'react';


import {
  useQuery,
} from '@tanstack/react-query';

import { getUsers } from '../api/getUsers';

const Users = () => {
  //useQuery hook to fetch data
  const {data, isPending, error} = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  })

  if (isPending) return <div className='users__container-loading'>Loading...</div>

  if (error) return <div className='users__container-error'>{error.message}</div>

  return (
    <div className='users__container section__padding'>
      <div className='users__container-header'>
        <h1>Users Query</h1>
        <p>Query Like a Pro</p>
      </div>
      <div className='users__container-body section__padding'>
        <h2>Users</h2>
        <div className='users__container-body_users-info'>
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Users;
