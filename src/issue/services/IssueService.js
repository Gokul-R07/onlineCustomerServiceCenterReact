
import axios from 'axios';

const getAllIssueUrl = "http://localhost:8080/issues";
const findIssueUrl = "http://localhost:8080/issue/{issueId}";
const updateIssueUrl = "http://localhost:8080/issue/update/{customerId}/{issueId}";
const deleteIssueUrl = "http://localhost:8080/issue/delete/{customerId}/{issueId}";
const addIssueUrl = "http://localhost:8080/issue/{customerId}";

class IssueService  {



    getAllIssues() {
       return axios.get(getAllIssueUrl);
       
       
    }

    findIssue(){

    }

    updateIssue(){

    }

    deleteIssue(){

    }
    addIssue(){

    }


    
};

export default new IssueService();