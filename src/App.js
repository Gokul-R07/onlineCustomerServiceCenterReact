import React from 'react';
import ChangePassword from './operator/components/changePassword/ChangePassword';
import Operator from './pages/operator/Operator';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import OperatorLayout from './pages/operator/OperatorLayout';
import "./App.css"
import { Toaster } from 'react-hot-toast';

function App() {
  sessionStorage.setItem("id",1)
  return (
    <div className="App">
     <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Router>
        <Routes>
          <Route path="/" element={
            <Navigate to="/operator" />
          }></Route>
          <Route path="/operator" element={<OperatorLayout><Operator /></OperatorLayout>}></Route>
          <Route path="/change-password" element={<OperatorLayout><ChangePassword /></OperatorLayout>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
