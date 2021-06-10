import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {

    const { animals, getAnimals } = useContext(AnimalContext)

    const history = useHistory()

    useEffect(() => {
        //useEffect - reach out to the world for something
        getAnimals()
    }, [])//the empty array bracket is the 'dependency array' 

    return (

        <>
            <h2>Animals</h2>
            <button onClick={
                () => history.push("/animals/create")
            }>
                Add Animal
      </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return (
                            <div className="animal" id={`animal--${animal.id}`}>
                                <div className="animal__name">
                                    Name: {animal.name}
                                </div>
                                <div className="animal__breed">
                                    Breed: {animal.breed}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}