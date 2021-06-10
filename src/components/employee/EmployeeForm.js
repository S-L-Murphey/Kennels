import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    

    /*Define the intial state of the form with useState() */
    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    });

    const history = useHistory();

    /*Get customers state and locations state on initialization.*/
    useEffect(() => {
        getLocations()
    }, [])

    /*When a field changes, update the state. */
    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee } //makes a copy of state
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = parseInt(employee.locationId)
       

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            const newEmployee = {
                name: employee.name,
                locationId: locationId
            }
            addEmployee(newEmployee)
                .then(() => history.push("/employees"))
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="EmployeeName" value={employee.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
                Save Employee
          </button>
        </form>

    )
}