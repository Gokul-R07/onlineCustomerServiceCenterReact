import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateIssue from './components/CreateIssue';
import ViewCustomer from './components/viewCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import CustomerNavBar from './components/customerNavBar';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
            <Route path="/create-issue" element={<CreateIssue />} />
            <Route path="/view-customer" element={<ViewCustomer />}></Route>
            <Route path="/update-customer" element={<UpdateCustomer />}></Route>
            <Route path="/navbar" element={<CustomerNavBar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
