import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    
    const { getLocationById, locations } = useContext(LocationContext)
   
    const [ location, setLocation ] = useState({ 
            employees: [], 
            animals: [] 
        });


    const { locationId } = useParams();


    useEffect(() => {
        
        getLocationById(locationId).then((thisLocation)=> {
            setLocation(thisLocation)
        })

    }, [locationId])

    return (
        
    <section className="location">

        <h3 className="location__name">{ location.name }</h3>
        <div className="location__address">{ location.address }</div>
        
       <div className = "location__employees">
       { location.employees.map(employee => <div key={employee.id}>  { employee.name } </div>) }
       </div>

       <div className = "location__animals">
       { location.animals.map(animal =>  <div key={animal.id}>   { animal.name }    </div> )}
       </div>
    </section>
    );}