import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory, Link } from "react-router-dom"

export const LocationList = () => {

    const { getLocations, locations } = useContext(LocationContext)

    const history = useHistory()

    useEffect(() => {
       //useEffect - reach out to the world for something
        getLocations()
      }, [])//the empty array bracket is the 'dependency array' 

      return (
         
        <>
        <h2>Locations</h2>
        <button onClick={
          () => history.push("/locations/create")
        }>
              Add Location
        </button>
        <div className="locations">
        {
          locations.map(location => {
           
            return (
                <>
                
              <div className="location" id={`location--${location.id}`}>
              <Link to={`/locations/detail/${location.id}`}>
                <h2 className="location__name">
                  Name: { location.name }
                </h2>
                </Link>
                <div className="location__employee">
                  Employees: { location.employees.length }
                </div>
                <div className="location__animal">
                  Animals: { location.animals.length }
                </div>
              </div>
            </>
            )
        })}
        </div>
      </>
      )
    }