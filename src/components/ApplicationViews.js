import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalForm } from "./animal/AnimalForm"
import "./Kennel.css"
import { EmployeeForm } from "./employee/EmployeeForm"
import { LocationForm } from "./location/LocationForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>

                <Route exact path="/">
                    <h2>Our Locations</h2>
                    <LocationList />
                </Route>

                <Route exact path="/locations/edit/:locationId(\d+)">
                    <LocationForm />
                </Route>
                    
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>

            </LocationProvider>

            <AnimalProvider>
                <Route path="/animals">
                    <h2>Our Animals</h2>
                    <AnimalList />
                    <AnimalSearch />
                </Route>

                <CustomerProvider>
                    <LocationProvider>
                        <Route exact path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </LocationProvider>
                </CustomerProvider>

                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>

            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                    <h2>Our Customers</h2>
                    <CustomerList />
                </Route>

            </CustomerProvider>

            <EmployeeProvider>
                <Route exact path="/employees">
                    <h2>Our Team</h2>
                    <EmployeeList />
                </Route>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>

                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>

            </EmployeeProvider>
        </>
    )
}