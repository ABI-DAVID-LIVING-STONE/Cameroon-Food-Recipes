import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RecipeSearchPage from './pages/RecipeSearchPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import UserProfilePage from './pages/UserProfilePage';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
         <Route path="/" element={< HomePage />} />
         <Route path="/login" element={< LoginPage />} />
         <Route path="/signup" element={< SignupPage />} />
         <Route path="/search" element={< RecipeSearchPage />} />
         <Route path="/recipe/:id" element={< RecipeDetailsPage />} />
         <Route path="/profile" element={< UserProfilePage />} />
         

      </Routes>
    </div>
    </Router>
  );
}

export default App;
