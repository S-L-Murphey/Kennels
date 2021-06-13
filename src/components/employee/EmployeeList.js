import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



export const EmployeeList = () => {

    const { getEmployees, employees } = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
       //useEffect - reach out to the world for something
        getEmployees()
      }, [])//the empty array bracket is the 'observable array' 

      return (
        <>
        <h1>Employees</h1>

        {/*<button onClick={() => history.push("/employees/create")}>
            Make Reservation
      </button>*/}

        <div className="employees">
            {
                employees.map(employee =><div className="employee"> <Link to={`/employees/detail/${employee.id}`}>
                    
                      { employee.name }
                    
                    </Link>
                    </div>
                )
            }
        </div>
    </>
)
}