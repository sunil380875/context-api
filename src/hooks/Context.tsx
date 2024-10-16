import React, { createContext, useState } from "react";

// const NameContext = createContext({});
const NameContext = createContext({ name: "", updateName: (value: string) => {} });


const NameProvider = ({ children }: any) => {

    const [name, setName] = useState("Sunil")

    const updateName = (value:string) => {
        setName(value)
    }
    return (
        <NameContext.Provider value={{ name,updateName }}>
            {children}
        </NameContext.Provider>
    )

}


export {NameContext,NameProvider}