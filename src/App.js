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

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //Logged in
        console.log(userAuth)
      } else {
        //Logged out
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
