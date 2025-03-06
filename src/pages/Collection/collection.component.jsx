import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import './collection.styles.scss';
import { selectCollectionByUrlParam } from '../../assets/Redux/shop/shop.selecter';
import CollectionItem from '../../component/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
  if (!collection) {
    return <div>Loading...</div>; // Handle case where collection is not found
  }

  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps; // Access collectionId from props
  return {
    collection: selectCollectionByUrlParam(collectionId)(state), // Pass collectionId to the selector
  };
};

// Create a connected component
const ConnectedCollectionPage = connect(mapStateToProps)(CollectionPage);

// Wrap the connected component to pass `collectionId` as a prop
const CollectionPageWrapper = () => {
  const { collectionId } = useParams(); // Use useParams here
  return <ConnectedCollectionPage collectionId={collectionId} />;
};

export default CollectionPageWrapper;