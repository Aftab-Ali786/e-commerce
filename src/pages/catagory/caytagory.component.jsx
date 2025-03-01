import React from 'react';
import { useParams } from 'react-router-dom';
import './caytagory.styles.scss';

const CategoryPage = () => {
  const { categoryId } = useParams(); // Access the route parameter using useParams

  console.log(categoryId); // Log the categoryId to see the value

  return (
    <div className="category">
      <h2>This is the category page for {categoryId}</h2>
    </div>
  );
};

export default CategoryPage;