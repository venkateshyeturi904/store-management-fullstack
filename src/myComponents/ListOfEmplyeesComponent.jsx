
import React, { useState, useEffect } from 'react';
import { getEmployees } from '../services/EmployeeService.js';
import { useNavigate } from 'react-router-dom';


export default function ListOfEmplyeesComponent() {
        
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.error("Error fetching employees:", error);
            });
    }, [employees]);
    console.log("emp",employees);
  return (
    <div>
        <h2 className = "text-center">Employees List</h2>
        <div className = "row"> 
            <button className="btn btn-primary" onClick = {()=>navigate('../add-employee')}>Add employee</button>
        </div>
        <div className="row">
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>EmployeeName</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee)=>{
                            return(
                                <tr key = {employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.experience}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.skills}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
 