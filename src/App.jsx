import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/home.component";
import Shop from "./pages/shop/shop.component";
import "./App.css";
import SignInAndSignUpPage from "./pages/signin-signup/sign-in-and-sign-up.component";
import Header from "./component/header/header.component";
import { auth, createUserProfileDocument } from "./component/Firebase/firebase.utils";
import { Provider, useDispatch } from "react-redux";
import { store, persistor } from "./assets/Redux/store";
import { setCurrentUser } from "./assets/Redux/Users/user-action";
import CheckOut from "./component/checkout/checkOut.component"; // Corrected component name
import { PersistGate } from "redux-persist/integration/react";

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
        <Route path="/checkout" element={<CheckOut />} /> {/* Corrected prop and component name */}
      </Routes>
    </>
  );
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}> 
        <AppContent />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

export default App;