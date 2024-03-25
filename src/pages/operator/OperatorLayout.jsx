import React from 'react'
import OperatorNavBar from '../../operator/components/operatorNavBar/OperatorNavBar';


const OperatorLayout =({ children }) => {
    return (
      <div>
        <OperatorNavBar/>
        {children}
      </div>
    );
  };

export default OperatorLayout