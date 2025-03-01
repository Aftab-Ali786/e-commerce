import React from 'react';
import { useParams } from 'react-router-dom';
import './collection.styles.scss';

const CollectionPage = () => {
  const { collectionId } = useParams(); // Access the route parameter using useParams

  console.log(collectionId); // Log the categoryId to see the value

  return (
    <div className="collection">
      <h2>This is the category page for {collectionId}</h2>
    </div>
  );
};

export default CollectionPage;