import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Home from "./component/Home";
import AuthComponent from "./AuthComponent";
import { useAuth } from "./useAuth";
import Navigation from "./component/Navigation";
import Contact from "./component/Contact";
import About from "./component/About";

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <Navigation />}
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
