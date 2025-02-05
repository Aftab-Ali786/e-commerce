import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { additem } from "../../assets/Redux/Cart/cart.actions";
import "./collection-item.styles.scss";

export const CollectionItem = ({ item, additem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => additem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  additem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  additem:item => dispatch(additem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem); 