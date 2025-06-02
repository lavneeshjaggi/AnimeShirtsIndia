import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, currentUser }) => {
  const navigate = useNavigate();
  const { imageUrl, title, price } = item;

  return (
    <div className="collection-item">
      <div className="img" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{title}</span>
        <span className="price">Rs {price}</span>
      </div>
      <CustomButton
        onClick={() => (currentUser ? addItem(item) : navigate("/signin"))}
      >
        add to cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
