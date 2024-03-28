import React, { useState, useEffect} from 'react';
import CustomerService from '../service/CustomerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateCustomerComponent = () => {
    const customerEmail = sessionStorage.getItem("emailId");
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: customerEmail,
        password: '',
        phoneNumber: '',
        city: ''
    });
    useEffect(() => {
        CustomerService.getCustomerByEmail(customerEmail)
            .then((data) => {
               setCustomer(data.data);
                console.log("data:",data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [customerEmail]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    
        if (!customer.firstName || !customer.lastName || !customer.password) {
            toast.error("Please fill in all required fields");
            return;
        }

        CustomerService.updateCustomerProfile(customer)
            .then(
                (resp) => {
                    console.log(resp);
                    toast.success("Customer updated successfully!");
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    toast.error("Could not update customer");
                }
            );
        console.log('Submitting form:', customer);
    };

    return (
        <div className="container">
            <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={customer.firstName} onChange={handleInputChange} required />
                </div>

                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={customer.lastName} onChange={handleInputChange} required/>
                </div>

                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name="email" value={customer.email} readOnly />
                </div>

                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={customer.password} onChange={handleInputChange} required pattern="[A-Za-z\d@$!%*?&]{8}$" title="Password should contain 8 characters with minimum one uppercase char, one lowercase char, one number and one special char" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={customer.phoneNumber} onChange={handleInputChange} required pattern="^\d{10}$" title="Phonenumber should contain only number and has 10 numbers length"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" value={customer.city} onChange={handleInputChange} required/>
                </div>
                <div className="col-md-5">
                    <button type="submit" className="btn btn-primary"><b>Update</b></button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default UpdateCustomerComponent;