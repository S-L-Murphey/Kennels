import React, { useState, createContext } from "react"

export const AnimalContext = createContext()

export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
        .then(res => res.json())
        .then(setAnimals)
    }

    const getAnimalById = (animalId) => {
        return fetch(`https://nsskennelsapi.herokuapp.com/animals/${animalId}?_expand=customer&_expand=location&_sort=location.id`)
        .then(res => res.json())
    }

    const addAnimal = animalObj => {
        return fetch("https://nsskennelsapi.herokuapp.com/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
        .then(response => response.json())
    }

    const releaseAnimal = animalId => {
        return fetch(`https://nsskennelsapi.herokuapp.com/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
    }

    const updateAnimal = animal => {
        return fetch(`https://nsskennelsapi.herokuapp.com/animals/${animal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(animal)
        })
          .then(getAnimals)
      }
      

    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, 
            getAnimalById, releaseAnimal, updateAnimal,
            searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}