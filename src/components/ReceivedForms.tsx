import React from 'react'
import Navbar from './NavBar';

interface ReceivedForms {
    firstName: string;
    lastName: string;
    email: string;
    birthDay: string;
}

type ReceivedFormsType = ReceivedForms[]

const ReceivedForms: React.FC = () => {

    const ReceivedFormsList: ReceivedFormsType = 
    [
    {
    firstName: "name1",
    lastName: "name1",
    email: "email1",
    birthDay: "day1"
    },
    {
    firstName: "name2",
    lastName: "name2",
    email: "email2",
    birthDay: "day2"
    },
    {
    firstName: "name3",
    lastName: "name3",
    email: "email3",
    birthDay: "day3"
    }
    ]

    return (
        <>
        <Navbar/>
        <br/>
        <h1>Received Forms</h1>
        <br/><br/>
        <ul className='list-unstyled'>
        {ReceivedFormsList.map((item:any, index:number) => (
            <>
                <li key={index} className='border rounded'>
                    <div>{item.firstName}</div>
                    <div>{item.lastName}</div>
                    <div>{item.email}</div>
                    <div>{item.birthDay}</div>
                </li><br/>
            </>))}
        </ul>
        </>
    )
    
}

export default ReceivedForms