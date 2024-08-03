import React from 'react'

export const getUsers = () => {
  const getusers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

  return getusers;
}

