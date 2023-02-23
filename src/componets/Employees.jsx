import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Employees = () =>{

    const [employees,setEmployees] = useState([]);

    useEffect(()=>{
        axios.get('employees.json').then(result=>setEmployees(result.data)).catch(err=>console.log(err))
       
    },[])

    const addEmp = (e)=>{
        e.preventDefault();
        setEmployees([...employees,{name:'harshit',empId:7890,designation:'DSE'}])
    }
    return(<div>
        <table>
            <thead>
                <tr>
                    <th>EMP ID</th>
                    <th>NAME</th>
                    <th>DESIGNATION</th>
                </tr>
            </thead>
            <tbody>
             
                    {employees.map((emp)=>{
                        return <tr key={emp.empId}>
                            <td>{emp.empId}</td>
                             <td>{emp.name}</td>
                              <td>{emp.designation}</td>
                        </tr>
                    })}
              
            </tbody>
        </table>

        <button onClick={addEmp}>Add an employee</button>
    </div>)
}


export default Employees;