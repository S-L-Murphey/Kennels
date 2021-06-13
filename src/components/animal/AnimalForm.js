import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory, useParams } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal, getAnimalById, updateAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    const [animal, setAnimal] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {animalId} = useParams();
    const history = useHistory();

    /*useEffect(() => {
        getCustomers().then(getLocations)
    }, [])*/

    const handleControlledInputChange = (event) => {
        const newAnimal = { ...animal } //makes a copy of state
        newAnimal[event.target.name] = event.target.value
        setAnimal(newAnimal)
    }

    /*const handleClickSaveAnimal = (event) => {
        event.preventDefault()

        const locationId = parseInt(animal.locationId)
        const customerId = parseInt(animal.customerId)

        if (locationId === 0 || customerId === 0) {
            window.alert("Please select a location and a customer")
        } else {
            const newAnimal = {
                name: animal.name,
                breed: animal.breed,
                locationId: locationId,
                customerId: customerId
            }
            addAnimal(newAnimal)
                .then(() => history.push("/animals"))
        }
    }*/

    const handleSaveAnimal = () => {
        if (parseInt(animal.locationId) === 0) {
            window.alert("Please select a location")
        } else {
          //disable the button - no extra clicks
          setIsLoading(true);
          if (animalId){
            //PUT - update
            updateAnimal({
                id: parseInt(animal.id),
                name: animal.name,
                breed: animal.breed,
                locationId: parseInt(animal.locationId),
                customerId: parseInt(animal.customerId)
            })
            .then(() => history.push(`/animals/detail/${animal.id}`))
          }else {
            //POST - add
            addAnimal({
                name: animal.name,
                breed: animal.breed,
                locationId: parseInt(animal.locationId),
                customerId: parseInt(animal.customerId)
            })
            .then(() => history.push("/animals"))
          }
        }
      }

       // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        getCustomers().then(getLocations).then(() => {
          if (animalId){
            getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        })
      }, [])
  

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal Name:</label>
                    <input type="text" id="animalName" required autoFocus className="form-control" placeholder="Animal Name" onChange={handleControlledInputChange} defaultValue={animal.name}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal breed:</label>
                    <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={animal.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleControlledInputChange}>
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveAnimal()
          }}>
        {animalId ? <>Save Animal</> : <>Add Animal</>}</button>
        </form>

    )
}