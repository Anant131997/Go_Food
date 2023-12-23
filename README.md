

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


Note -> There are 2 types of import/export

1) Default Import/Export

export default Component
import Component from "path"


2) Named Import/Export  ---> Used when we have to export multiple things from the same file.

export const Component
import {Component} from "path"

TMKC