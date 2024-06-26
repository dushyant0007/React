/*
    useContext() = React Hook that allows you to share values
                   between multiple levels of components
                   without passing props through each level
        
    we need to set up a 
    PROVIDER COMPONENT
    1. import {createContext} from 'react'
    2. export const MyContext = createContext();
    3. <MyContext.provider value={value}>
        <child />
        </MyContext.Provider>
   
    CONSUMER COMPONENT
    1. import React, {useContext} from 'react;
       import {MyContext} from './ComponentA';
    2. const value = useContext(MyContext);
*/  

import {useState,createContext} from "react";
import ComponentB from "./C_B-UseContext";

export const UserContext = createContext();
 
function ComponentA(){
    const [user,/*setUser*/] = useState("Olga vision");
    return (
 
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;