import { connect } from "react-redux";
import { lazy, Suspense } from "react";
import { createStructuredSelector } from "reselect";
import { Route, Navigate, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.scss";

const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const SignInPage = lazy(() => import("./pages/sign-in/sign-in.component"));
const SignUpPage = lazy(() => import("./pages/sign-up/sign-up.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const withSuspense = (Component) => (
  <ErrorBoundary>
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

const App = ({ currentUser }) => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={withSuspense(Homepage)} />
      <Route path="/shop/*" element={withSuspense(ShopPage)} />
      <Route
        path="/signin"
        element={currentUser ? <Navigate to="/" /> : withSuspense(SignInPage)}
      />
      <Route
        path="/signup"
        element={currentUser ? <Navigate to="/" /> : withSuspense(SignUpPage)}
      />
      <Route
        path="/checkout"
        element={
          currentUser ? withSuspense(CheckoutPage) : <Navigate to="/signin" />
        }
      />
    </Routes>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
