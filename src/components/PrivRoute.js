import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

export default function ExpRoute({component: Component, role, ...rest}) {
    const {currentUserdb} = useAuth()
    return (
        <Route
        {...rest}
        render={props => {
            if(role === "user") return (currentUserdb && currentUserdb.role ==="user" ) ? <Component {...props}/> : <Redirect to ="/" />
            else if(role=== "prac") return (currentUserdb && currentUserdb.role ==="prac" ) ? <Component {...props}/> : <Redirect to ="/" />
            return currentUserdb ? <Component {...props}/> : <Redirect to ="/" />
        }}
        >
        </Route>
    )
}
