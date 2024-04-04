import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import CreateNewOperator from "./components/CreateNewOperator";
import ViewAllOperators from "./components/ViewAllOperators";
import CreateNewAdmin from "./components/CreateNewAdmin"; // Update the import path

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/create-operator" element={<CreateNewOperator />} />
          <Route path="/view-operators" element={<ViewAllOperators />} />
          <Route path="/create-admin" element={< CreateNewAdmin/>} /> {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
