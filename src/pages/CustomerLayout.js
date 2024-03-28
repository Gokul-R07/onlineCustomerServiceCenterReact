import React from 'react';
import CustomerNavBar from '../components/customerNavBar';

export const CustomerLayout = ({children}) => {
  return (
    <div>
        <CustomerNavBar/>
        {children}
    </div>
  );
};
