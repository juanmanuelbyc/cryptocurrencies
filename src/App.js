import { useDispatch } from 'react-redux';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage';
import { fetchData } from './redux/cryptos/cryptos';
import DetailsPage from './pages/detailsPage';

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchData());

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route exact path="/Home" element={<HomePage />} />
        <Route exact path="/Details" element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
