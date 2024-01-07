

----------------App Layout-----------------

-> Header
        -LOGO
        -Nav Items
-> Body
        -Search
        -ResturantContainer
            -ResturantCard
                -Img
                -Name of Resturant and other details
-> Footer
        -Copyright
        -Link
        -Address
        -Contact

-----------------------------------------------


# Note -> There are 2 types of import/export.

1) Default Import/Export

export default Component
import Component from "path"


2) Named Import/Export  ---> Used when we have to export multiple things from the same file.

export const Component
import {Component} from "path"



------------------------------------------------

# Redux Toolkit

   - Install @reduxjs/toolkit and react-redux
   - Build our store
   - Connect our store to our App
   - Slice (cartSlice)
   - dispatch(action)
   - Read data using Selector
   

// "main": "tailwind.config.js"
//"build": "parcel build index.html"



# Types of testing (developer)
 - Unit Testing
 - Integeration Testion
 - End to End Testing (e2e testing).


# Setting up testing in our App
 - Install React Testing Library
 - Install Jest
 - Install Babel
 - configure Babel.config.js
 - Configure Parcel Config File to disable default Babel Transpilation
 - Jest Configuration (npx jest --init)
 - Install jsdom library
 - Install @babel/preset-react library - To make JSX work in test cases(wihout it, render function will not work in test.)
 - Add @babel/preset-react inside our babel.config.js
 - Install @testing-library/jest-dom using - (npm install -D @testing-library/jest-dom)