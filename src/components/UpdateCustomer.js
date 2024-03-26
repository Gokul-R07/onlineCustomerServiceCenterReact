import React, { useState, useEffect } from 'react';
import CustomerService from '../service/CustomerService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateCustomerComponent = () => {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        city: ''
    });

    useEffect(() => {
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        CustomerService.updateCustomer(customer)
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
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter first name" onChange={handleInputChange} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter last name" onChange={handleInputChange} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={handleInputChange} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" onChange={handleInputChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" name="city" placeholder="Enter city" onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary" col-md-5><b>Update</b></button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default UpdateCustomerComponent;
