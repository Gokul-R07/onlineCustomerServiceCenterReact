// services/api.js

// const operators = [
//   { id: 1, name: "Operator 1", pendingIssues: 3, allocatedIssues: 5 },
//   { id: 2, name: "Operator 2", pendingIssues: 2, allocatedIssues: 7 },
//   { id: 3, name: "Operator 3", pendingIssues: 1, allocatedIssues: 4 },
// ];

// const issues = [
//   { id: 1, description: "Issue 1 description", assignedTo: null },
//   { id: 2, description: "Issue 2 description", assignedTo: null },
//   { id: 3, description: "Issue 3 description", assignedTo: null },
// ];

export const getAllOperators = () => {
  return fetch('http://localhost:8080/all-operators')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching operators:', error);
      return [];
    });
};

export const getAllIssues = () => {
  return fetch('http://localhost:8080/issues')
    .then(response => response.json())
    .catch(error => {
      console.error('Error fetching issues:', error);
      return [];
    });
};

export const assignOperatorToIssue = (issueId, operatorId) => {
  return fetch(`http://localhost:8080/allocateIssue/${issueId}/assign/${operatorId}`, {
    method: 'PUT'
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error assigning operator to issue:', error);
      return null;
    });
};

export const updateOperatorProfile = (operatorId, updatedProfile) => {
  return fetch(`http://localhost:8080/operator/register/${operatorId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedProfile)
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error updating operator profile:', error);
      return null;
    });
};

export const deleteOperator = (operatorId) => {
  return fetch(`https://api.example.com/operators/${operatorId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .catch(error => {
      console.error('Error deleting operator:', error);
      return null;
    });
};
