import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login,logout, selectUser} from './features/userSlice'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth)
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      } else {
        //Logged out
        dispatch(logout)
      }

    })

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/test" element={<h1>salam</h1>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
