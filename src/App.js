import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import DisplayIssues from './issue/components/DisplayIssues';
import AddIssue from './issue/components/AddIssue';
import UpdateIssue from './issue/components/UpdateIssue';

function App() {
  return (
    <>
    <h1>CRUD APP</h1>


    <BrowserRouter>
    <Routes>
      <Route path={'./'} element={<DisplayIssues />} exact = {true}/>
      <Route path={"/displayissues"} element={<DisplayIssues />} exact = {true}/>
      <Route path={"/addissue"} element={<AddIssue />} exact = {true}/>
      <Route path={"/updateissue"} element={<UpdateIssue />} exact = {true}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
