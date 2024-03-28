import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateIssue from './components/CreateIssue';
import ViewCustomer from './components/viewCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import { CustomerLayout } from './pages/CustomerLayout';

function App() {
  sessionStorage.setItem("emailId", "rg@gmail.com");
  return (
    <div className="App">
     
   <BrowserRouter>
        <Routes>
            <Route path="/create-issue" element={<CustomerLayout><CreateIssue /></CustomerLayout> } />
            <Route path="/view-customer" element={ <CustomerLayout><ViewCustomer /></CustomerLayout> }></Route>
            <Route path="/update-customer" element={ <CustomerLayout><UpdateCustomer /></CustomerLayout> }></Route>
            <Route path="/" element={<CustomerLayout />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
