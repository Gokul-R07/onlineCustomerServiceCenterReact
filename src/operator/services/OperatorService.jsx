import axios from 'axios';

const OperatorService = {
    getAllPendingIssuesByOperatorId: (id) => {
        return axios.get(`http://localhost:8080/pending-issue-by-id?operatorId=${id}`);
    },
    changePassword:(passwordData)=>{
        return axios.patch(`http://localhost:8080/operator/change-password`,passwordData);
    }
};

export default OperatorService;
