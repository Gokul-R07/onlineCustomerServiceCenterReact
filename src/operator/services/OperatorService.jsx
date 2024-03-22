import axios from 'axios';

const OperatorService = {
    getAllocatedIssuesByOperatorId: (id) => {
        return axios.get(`http://localhost:8080/operator?operatorId=${id}`);
    }
};

export default OperatorService;
