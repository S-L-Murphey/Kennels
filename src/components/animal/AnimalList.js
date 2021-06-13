import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"



export const AnimalList = () => {

    const { getAnimals, animals } = useContext(AnimalContext)

    const history = useHistory()

    useEffect(() => {
        //useEffect - reach out to the world for something
        getAnimals()
    }, [])//the empty array bracket is the 'dependency array' 

    return (

        
            <>
            <h1>Animals</h1>

            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>

            <div className="animals">
                {
                    animals.map(animal => <h3 className="animal"><Link to={`/animals/detail/${animal.id}`}>
                          { animal.name } 
                        </Link></h3> )
                }
            </div>
        </>
    )
}