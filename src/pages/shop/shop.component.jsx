import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../component/collection-preview/collection-preview.component";
 
class Shop extends React.Component{
    constructor(props){
        super(props)
 this.state ={
        Collection:SHOP_DATA
    };
}

render(){
  
    const {Collection} = this.state;
    return (<div className="shop-page">
        {
            Collection.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
            
        </div> 
    )
}
}
export default Shop