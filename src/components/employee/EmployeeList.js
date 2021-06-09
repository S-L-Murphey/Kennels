import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {

    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
       //useEffect - reach out to the world for something
        getEmployees()
      }, [])//the empty array bracket is the 'dependency array' 

      return (
        <section className="employees">
          {
            employees.map(employee => {
              return (
                <div className="employee" id={`employee--${employee.id}`}>
                  <div className="employee__name">
                    Name: { employee.name }
                  </div>
                </div>
              )
            })
          }
        </section>
      )
    }