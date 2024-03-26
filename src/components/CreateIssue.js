import React, { useState } from 'react';
import IssueService from "../service/IssueService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function IssueForm() {
    
    const [issue, setIssue] = useState({
        
        issueType: 'Engine problems',
        issueDescription: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIssue({ ...issue, [name]: value });
    };

    let [message] = useState("");
    let [errorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        IssueService.addIssueToCustomer(1002, issue)
            .then(
                (resp) => {
                    console.log(resp);
                    
                    toast.success("Successfully issue added!");
                 
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    toast.error("Could not add issue:(");
                    
                }
            );
        console.log('Submitting form:', issue);
    };

    return (
        <>
            {message && <div className="alert alert-success">{message}</div>}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <div className="container mt-5">
                <form name="issue" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="issueType"><b>Enter the type of issue:</b></label>
                        <select className="form-control" name="issueType" id="issueType" value={issue.issueType} onChange={handleInputChange} required style={{ maxHeight: '50px', overflowY: 'scroll' }}>
                            <option value="Engine problems">Engine problems</option>
                            <option value="Transmission issues">Transmission issues</option>
                            <option value="Electrical system malfunctions">Electrical system malfunctions</option>
                            <option value="Brake system failures">Brake system failures</option>
                            <option value="Suspension problems">Suspension problems</option>
                            <option value="Cooling system troubles">Cooling system troubles</option>
                            <option value="Steering issues">Steering issues</option>
                            <option value="Exhaust system malfunctions">Exhaust system malfunctions</option>
                            <option value="Fuel system problems">Fuel system problems</option>
                            <option value="Tire-related issues">Tire-related issues</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="issueDescription"><b>Enter the description of issue:</b></label>
                        <textarea className="form-control" rows="5" id="issueDescription" name="issueDescription" value={issue.issueDescription} onChange={handleInputChange} required pattern="[a-zA-Z ]{10,}" title="Name should contain only chars and has min 10 chars length."></textarea>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary"><b>Save</b></button>
                </form>
                <ToastContainer />
            </div>
        </>
    );
}

export default IssueForm;
