import React, { useEffect, useState } from 'react';
import "./OperatorHomePage.css";
import OperatorService from '../../services/OperatorService';

const OperatorHomePage = () => {
  const [issues,setIssues]=useState([])
  
  useEffect(() => {

    fetchAllPendingIssuesByOperatorId(1); 
  }, []); 

  const fetchAllPendingIssuesByOperatorId = async (id) => {
    try {
      const response = await OperatorService.getAllPendingIssuesByOperatorId(id);
      console.log(response);
      setIssues(response.data)
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='operatorHomePage'> 
      <h3 className='welcomeText' >Welcome gokul</h3>

      { issues.length==0 && <p>No Issues Allocated For You</p>}
      { issues.length>0 && 
           <div className='issuesDiv'>
           { issues.map((issue) =>
           
            <div key={issue.issueId}  className='issueDiv'>

              <div className='commonDiv'>
              <p> <b>Issue Type </b>: {issue.issueType}</p>
              <p> <b>Issue Status </b>: {issue.issueStatus}</p>
             
              </div>
              
              <div>
              <p> <b>Issue Description</b> </p>
              <p>{issue.issueDescription}</p>
              </div>
             {
              issue.issueStatus!=="SOLVED" && <button className='button addSolutionBtn'>Add Solution</button>
             }
           
           </div>) }
           </div>

      }
    </div>
  );
};

export default OperatorHomePage;
