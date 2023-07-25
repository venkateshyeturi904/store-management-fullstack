import React,{useState, useEffect} from 'react'
import { addEmployee } from '../services/EmployeeService';
import { Navigate, useNavigate } from 'react-router-dom';


export default function CreateEmployeeComponent() {


  const [employeeName,setEmployeeName] = useState('');
  const [employeeExperience, setEmployeeExperience] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState('');
  const [employeeSkills , setEmployeeSkills] = useState('');

  const handleNameChange = (event)=>{
    setEmployeeName(event.target.value);
  };

  const handleExperienceChange = (event)=>{
    setEmployeeExperience(event.target.value);
  };

  const handleSalaryChange = (event)=>{
    setEmployeeSalary(event.target.value);
  };

  const handleSkillsChange = (event)=>{
    setEmployeeSkills(event.target.value);
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    console.log(event);
    const newEmployee = {
      name: employeeName,
      experience : employeeExperience,
      salary : employeeSalary, 
      skills : [employeeSkills]

    };
    console.log(" space ",newEmployee);
    await addEmployee(newEmployee).then((response) => {
      console.log(response);
  })
  .catch((error) => {
      console.error("Error fetching employees:", error);
  });;
  };

  const navigate = useNavigate();
  const cancel = ()=>{
    navigate('../get-employees')
  };

  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className = "card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input placeholder='Employee name' name="name" 
                  className="form-control" 
                  value={employeeName} onChange={handleNameChange}/>
                </div>

                <div className="form-group">
                  <label>Experience</label>
                  <input placeholder='Employee Experience' name="experience" 
                  className="form-control" 
                  value={employeeExperience} onChange={handleExperienceChange}/>
                </div>

                <div className="form-group">
                  <label>Salary</label>
                  <input placeholder='Employee salary' name="salary" 
                  className="form-control" 
                  value={employeeSalary} onChange={handleSalaryChange}/>
                </div>


                <div className="form-group">
                  <label>Skills</label>
                  <input placeholder='Employee skills' name="salary" 
                  className="form-control" 
                  value={employeeSkills} onChange={handleSkillsChange}/>
                </div>


                <button className="btn btn-primary"  onClick = {handleSubmit} type="submit">Add Employee</button>
                <button className="btn btn-danger" onClick = {cancel} style={{marginLeft:"10px"}}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
