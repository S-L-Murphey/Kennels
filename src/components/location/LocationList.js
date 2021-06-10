import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationList = () => {

    const { locations, getLocations } = useContext(LocationContext)

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
              <div className="location" id={`location--${location.id}`}>
                <div className="location__name">
                  Name: { location.name }
                </div>
                <div className="location__address">
                  Address: { location.address }
                </div>
              </div>
            )
          })
        }
        </div>
      </>
      )
    }