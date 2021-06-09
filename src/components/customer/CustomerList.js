import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"

export const CustomerList = () => {

    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
       //useEffect - reach out to the world for something
        getCustomers()
      }, [])//the empty array bracket is the 'dependency array' 

      return (
        <section className="customers">
          {
            customers.map(customer => {
              return (
                <div className="customer" id={`customer--${customer.id}`}>
                  <div className="customer__name">
                    Name: { customer.name }
                  </div>
                </div>
              )
            })
          }
        </section>
      )
    }