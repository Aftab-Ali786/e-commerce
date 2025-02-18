import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/home.component";
import Shop from "./pages/shop/shop.component";
import "./App.css";
import SignInAndSignUpPage from "./pages/signin-signup/sign-in-and-sign-up.component";
import Header from "./component/header/header.component";
import { auth, createUserProfileDocument } from "./component/Firebase/firebase.utils";
import { Provider, useDispatch } from "react-redux";
import store from "./assets/Redux/store";
import { setCurrentUser } from "./assets/Redux/Users/user-action";
import checkOut from "./component/checkout/checkOut.component";


const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
        <Route exact path="/checkout" Component={checkOut}/>
      </Routes>
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </Provider>
);

export default App;
