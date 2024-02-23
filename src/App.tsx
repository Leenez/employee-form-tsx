import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminForm from './components/AdminForm'
import EmployeeForm from './components/EmployeeForm'
import ReceivedForms from './components/ReceivedForms'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element= {<AdminForm />} />
        <Route path="received-forms" element={<ReceivedForms/>} />
        <Route path="employee-form" element={<EmployeeForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
