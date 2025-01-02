import React from "react";

import SHOP_DATA from "./shop.data";
import { Collection } from "mongoose";
 
class Shop extends React.Component{
    constructor(props){
        super(props)
 this.state ={
        Collection:SHOP_DATA
    }
}

render(){
    return (
        <div>Shop page</div>
    )
}
}
export default Shop