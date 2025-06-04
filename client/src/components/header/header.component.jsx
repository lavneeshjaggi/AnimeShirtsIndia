import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../assets/yellow-raven.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { clearCart } from "../../redux/cart/cart.actions";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

const Header = ({ currentUser, hidden, clearCart }) => {
  const navigate = useNavigate();

  const signOut = async (event) => {
    await event.preventDefault();

    const response = await axios.get("/api/authenticated");

    const user = response.data.user;

    try {
      const config = axios.create({
        baseURL: "/",
        headers: { "Content-Type": "application/json" },
      });

      const data = {
        cart: user.cart,
        name: user.name,
        username: user.username,
        email: user.email,
        id: user._id,
      };

      const body = JSON.stringify(data);

      await config.post("/api/logout", body);

      await navigate("/signin");

      await clearCart();
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img alt="Logo" src={Logo} className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <Link className="option" to="/#" onClick={signOut}>
            Sign Out
          </Link>
        ) : (
          <div>
            <Link className="option" to="/signin">
              Sign In
            </Link>
            <Link className="option hidden" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
