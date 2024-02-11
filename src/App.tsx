import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from '../src/pages/ListadePeliculas';
import MovieDetailPage from '../src/pages/DetalledePelicula';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
