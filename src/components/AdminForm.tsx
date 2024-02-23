import React, { useState } from "react";
import Navbar from "./NavBar";

interface FormState {
    emails: string
}

const AdminForm: React.FC = () => {
    const [form, setForm] = useState<FormState>({emails: ''})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm((prevForm: FormState) => ({ ...prevForm, [name]: value }));
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('do something')
    };

    return (
        <>
        <Navbar />
        <div className="container mt-5">
            <form className="m-3" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="emails">Trainee Email(s):</label>
                <input
                    type="text"
                    name="emails"
                    value={form.emails}
                    onChange={handleChange}
                    className="form-control"
                />
                <small id="emailHelp" className="form-text text-muted">Separate multiple emails with semicolon</small>
                <br/>
                <input type="submit" className="btn btn-primary" value="Send"/>
            </form>
        </div>
        </>
    )
}

export default AdminForm