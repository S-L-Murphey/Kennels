import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {

    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
       //useEffect - reach out to the world for something
        getLocations()
      }, [])//the empty array bracket is the 'dependency array' 

      return (
         
        <section className="locations">
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
        </section>
      )
    }