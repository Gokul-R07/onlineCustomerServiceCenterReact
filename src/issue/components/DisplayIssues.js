// import React, { useState, useEffect } from 'react';
// import {service} from '../services/service.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DisplayIssues = () => {


//   useEffect(() => {
//     service.DisplayIssues()
//       .then(response => {
//         setIssues(response.data);
//       })
//       .catch(error => {
//         setErrorMessage('Error fetching issues: ' + error);
//       });
//   }, []);


import React, { useState, useEffect } from 'react';
import IssueService from '../services/IssueService';
import 'bootstrap/dist/css/bootstrap.min.css';
const DisplayIssues = () => {
  const [issues, setIssues] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await IssueService.getAllIssues();
        setIssues(response.data);
      } catch (error) {
        console.error('Error fetching issues:', error);
        setErrorMessage('Error fetching issues: ' + error);
      }
    };

    fetchIssues();
  }, []);

    return (
    <div className="container mt-4">
      <h3>Display All Issues:</h3>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      {issues.length > 0 && (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Issue No</th>
              <th>Issue Type</th>
              <th>Description</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr key={issue.issueId}>
                <td>{index + 1}</td>
                <td>{issue.issueType}</td>
                <td>{issue.issueDescription}</td>
                <td>{new Date(issue.issueCreationDate).toLocaleDateString()}</td>
                <td>{issue.issueStatus}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => navigateToUpdate(1, issue.issueId || 0)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => deleteIssue(issue.issueId)}>Delete</button>
                  <button className="btn btn-success" onClick={() => navigateToSolution(1, issue.issueId)}>View Solution</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayIssues;