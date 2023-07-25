
import React from 'react'

import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee";

const GET_EMPLOYEE_URL = EMPLOYEE_API_BASE_URL+"/getEmployees";
const POST_EMPLOYEE_URL = EMPLOYEE_API_BASE_URL+"/addEmployee";


export function getEmployees() {
    return axios.get(GET_EMPLOYEE_URL);
}

export async function addEmployee(newEmployee){
    return axios.post(POST_EMPLOYEE_URL,newEmployee);
}







