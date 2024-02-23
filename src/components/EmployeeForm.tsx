import React, { useState } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
}

const EmployeeForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({ firstName: '', lastName: '', email: '', birthday: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('do something')
  };

  return (
    <div className="container mt-5">
      <h1>Employee Form</h1>
        <br/><br/><br/>
        <form className="m-3" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="firstName">First Name:</label>
        <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="form-control"
        />
        <label className="form-label" htmlFor="lastName">Last Name:</label>
        <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="form-control"
        />
        <label className="form-label" htmlFor="email">Email:</label>
        <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control"
        />
        <label className="form-label" htmlFor="phone">Birth Day:</label>
        <input
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
            className="form-control"
        />
        <br/>
        <input type="submit" className="btn btn-primary" value="Send"/>
        </form>
    </div>
  );
};

export default EmployeeForm;