import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from '../collection-preview/collection-preview.component';
import './collection-overview.styles.scss';
import { selectShopItems } from "../../assets/Redux/shop/shop.selecter";

const CollectionsOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
});

export default connect(mapStateToProps)(CollectionsOverview);