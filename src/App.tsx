import React from 'react';
import { Layout } from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Resources } from './pages/Resources';
import { Community } from './pages/Community';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Layout>
  );
}