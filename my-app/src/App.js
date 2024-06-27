import React from 'react';
import CustomNavbar from './components/Navbar/navbar';
import HomePage from './pages/homepage/HomePage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <div>
      {/* Navbar */}
      <CustomNavbar />
      
      {/* Pages */}
      <HomePage />
      <ContactPage />
    </div>
  );
}

export default App;
