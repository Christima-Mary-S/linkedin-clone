import React from "react";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import Widget from "./Widget";
// import Login from "./Login";
// import { auth } from "./firebase";

function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // }, []);
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
