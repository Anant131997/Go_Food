import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User"
})

export default UserContext;


// createContext is used to make a value global. That means it can be used inside any component and the level is not necessary. 
// Earlier if we have to pass a props at many level down, then we have to pass the props in each level.
// Suppose we have to pass a prop from root level to the 10th level in the webpage, then we have to pass the same props through each 
// linked component from one component to the other component. This is known as -------- Props_Drilling -------

// With the help of createContext, we can pass the data from root level to the 10th level using createContext and useContext.
// In the root level we have to create a variable using createContext and
// In the 10th page we receive the same data using useContext hook.😊


// Suppose we wrap only <header> inside <Context.provider value={{loggedInUser:userName}}> </Context.provider> then the changes happen
// only in the header and all the other part of the page will have the default falue as was coming earlier. 