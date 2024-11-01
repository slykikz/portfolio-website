import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { projects } from './data/projects';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage projects={projects} />} />
        <Route path="/project/:id" element={<ProjectPage projects={projects} />} />
        <Route path="/pages/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;