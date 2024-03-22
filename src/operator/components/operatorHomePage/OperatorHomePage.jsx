import React, { useEffect, useState } from 'react';
import "./OperatorHomePage.css";
import OperatorService from '../../services/OperatorService';

const OperatorHomePage = () => {
  const [issues,setIssues]=useState([])
  
  useEffect(() => {

    fetchData(1); 
  }, []); 
  const fetchData = async (id) => {
    try {
      const response = await OperatorService.getAllocatedIssuesByOperatorId(id);
      console.log(response);
      setIssues(response.data.customerIssues)
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='operatorHomePage'> 
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
              issue.issueStatus!=="SOLVED" && <button className='addSolutionBtn'>Add Solution</button>
             }
           
           </div>) }
           </div>

      }
    </div>
  );
};

export default OperatorHomePage;
