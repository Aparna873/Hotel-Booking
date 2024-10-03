import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { createContext, useState } from 'react';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { Service } from './pages/service';
import { Footer } from './components/footer';

// Create the context
export const AppContext = createContext();

function App() {
  // Create shared state variables
  const [hotels, setHotels] = useState([]);

  return (
    <AppContext.Provider
      value={{
        hotels,
        setHotels,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
        <Footer/>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
