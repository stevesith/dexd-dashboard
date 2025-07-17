import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProfilePage from "./components/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
