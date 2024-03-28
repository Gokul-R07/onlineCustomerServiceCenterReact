import {axiosInstance} from "./Axios-http-client";

class CustomerService {
    getCustomerByEmail(email) {
        return axiosInstance.get(`http://localhost:8080/customer/${email}`);
    }

    updateCustomerProfile(customer) {
        return axiosInstance.put(`http://localhost:8080/update/customer`,customer);
    }
}

export default new CustomerService();
