import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

export default function ExpRoute({component: Component, ...rest}) {
    const {currentUserdb, currentUser} = useAuth()
    return (
        <Route
        {...rest}
        render={props => {
            console.log(currentUser + " " + currentUserdb)
           return (currentUserdb && currentUserdb.role =="prac" ) ? <Component {...props}/> : <Redirect to ="/login" />
        }}
        >
        </Route>
    )
}
