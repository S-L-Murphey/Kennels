import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)
    
    /*Define the intial state of the form with useState() */
    const [location, setLocation] = useState({
        name: "",
        address: ""
    });

    const history = useHistory();

    /*When a field changes, update the state. */
    const handleControlledInputChange = (event) => {
        const newLocation = { ...location } //makes a copy of state
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        //const locationId = parseInt(employee.locationId)
       
        const newLocation = {
                name: location.name,
                address: location.address
            }
        
            addLocation(newLocation)
                .then(() => history.push("/"))
            }

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="LocationName" value={location.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address:</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="LocationAddress" value={location.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={handleClickSaveLocation}>
                Save Location
          </button>
        </form>

    )
}