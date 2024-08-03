import React, { useState } from 'react';


import {
  useQuery,
} from '@tanstack/react-query';

import { getUsers } from '../api/getUsers';
import Modal from '../container/Modal';

const Users = () => {
  const [user, setUser] = useState(null);
  const [ showModal, setShowModal ] = useState(false);

  //useQuery hook to fetch data
  const {data, isPending, error} = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
  })

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleClick = (user) => {
    setShowModal(true);
    setUser(user);
  }


  if (isPending) return <div className='users__container-loading'>Loading...</div>

  if (error) return <div className='users__container-error'>{error.message}</div>

  return (
    
    <div className='users__container section__padding'>
      {/* Modal */}
      {showModal && (
        <Modal
          user={user}
          closeModal={handleCloseModal}
        />
      )}

      <div className='users__container-header'>
        <h1>Users Query</h1>
        <p>Query Like a Pro</p>
      </div>
      <div className='users__container-body section__padding'>
        <h2>Users</h2>
        <div className='users__container-body_users-info'>
          <ul>
            {data.map((user) => (
              <li key={user.id} onClick={() => handleClick(user)}>
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
