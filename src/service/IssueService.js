import {axiosInstance} from "./Axios-http-client";

class IssueService {
    addIssueToCustomer(customerId, issue) {
        return axiosInstance.post(`http://localhost:8080/issue/${customerId}`, issue);
    }
}

export default new IssueService();
