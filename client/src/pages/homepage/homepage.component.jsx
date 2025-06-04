import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";

import Carousel from "../../components/carousel/carousel.component";
import Directory from "../../components/directory/directory.component";

import { clearCart } from "../../redux/cart/cart.actions";
import { setCurrentUser } from "../../redux/user/user.actions";

import "./homepage.styles.scss";

const Homepage = ({ setCurrentUser, clearCart }) => {
  useEffect(() => {
    const isLoggedIn = async () => {
      const user = await (await axios.get("/api/authenticated")).data.user;

      if (user)
        setCurrentUser({
          id: user._id,
          cart: user.cart,
          name: user.name,
          email: user.email,
        });
      else {
        setCurrentUser(null);
        clearCart();
      }
    };
    isLoggedIn();
  }, [setCurrentUser, clearCart]);

  return (
    <div className="homepage">
      <Carousel className="carousel" name={"homepageSlides"} />
      <Directory />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(Homepage);
