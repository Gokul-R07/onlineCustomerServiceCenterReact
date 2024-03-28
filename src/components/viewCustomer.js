import React, { useState, useEffect } from 'react';
import CustomerService from '../service/CustomerService'; 
import Customer from '../assets/customer.jpg'
function View() {
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        password: '',
        city: '',
        phoneNumber: ''
    });

    useEffect(() => {
        loadCustomerData();
    }, []);

    const loadCustomerData = () => {
        const customerEmail = sessionStorage.getItem("emailId");
        CustomerService
            .getCustomerByEmail(customerEmail)
            .then((resp) => {
                setCustomer(resp.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container  w-50">      
            <div className="card m-2 p-3" style={{borderColor:"blue"}}>
            <div className="text-center mb-4" >
                    <img src={Customer} alt="Customer" className="img-fluid rounded-circle" style={{ width: "150px", height: "150px" }} />
                </div>
                <form className="form-control p-1text-left" name="customer" style={{borderColor:"lightblue"}}>
                    <label className="form-label" htmlFor="name">Name</label><br />
                    <input className="form-control" type="text" id="name" name="name" value={`${customer.firstName} ${customer.lastName}`} disabled /><br />

                    <label className="form-label" htmlFor="email">Email</label><br />
                    <input className="form-control" type="email" id="email" name="email" value={customer.email} disabled /><br />


                    <label className="form-label" htmlFor="city">City</label><br />
                    <input className="form-control" type="text" id="city" name="city" value={customer.city} disabled /><br />

                    <label className="form-label" htmlFor="phoneNumber">Mobile Number</label><br />
                    <input className="form-control" type="tel" id="phoneNumber" name="phoneNumber" value={customer.phoneNumber} disabled /><br />
                </form>
            </div>
        </div>
    );
}

export default View;
