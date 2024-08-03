import React from 'react';
import './App.css';


import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import Users from './components/Users';

//initialize query client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  )
}

export default App;
