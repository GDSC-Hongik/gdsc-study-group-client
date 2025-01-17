import AppliedStudyItem from '../components/AppliedStudyItem';
import BigStudyItem from '../components/BigStudyItem';
import IntroduceItem from '../components/IntroduceItem';
import SmallStudyItem from '../components/SmallStudyItem';
import './App.css';
import ModalReviewWrite from '../components/ModalReviewWrite';
import React from 'react';
import ModalReviewers from '../components/ModalReviewers';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages_hhhk/home';
import LoginPage from './pages_hhhk/LoginPage';
import SignUpPage from './pages_hhhk/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
}

export default App;
