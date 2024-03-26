import {axiosInstance} from "./Axios-http-client";

class CustomerService {
    getCustomerByEmail(email) {
        return axiosInstance.get(`http://localhost:8080/customer/${email}`);
    }

    updateCustomer(customer) {
        return axiosInstance.put(`http://localhost:8080/customer`,customer);
    }
}

export default new CustomerService();
