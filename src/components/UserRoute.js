import React from 'react'
import {Redirect, Route} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

export default function ExpRoute({component: Component, ...rest}) {
    const {currentUserdb} = useAuth()
    return (
        <Route
        {...rest}
        render={props => {
           return (currentUserdb && currentUserdb.role =="user" ) ? <Component {...props}/> : <Redirect to ="/" />
        }}
        >
        </Route>
    )
}