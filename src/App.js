import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Help from './pages/Help';
import Contact from './pages/Contact';

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        if (data && data.recipes) {
          setMenu(data.recipes);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .then(data => setMenu(data.image))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <Router>
      <div className="cooking-pale">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className='main-section'>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", gap: 60 }}>
          {menu.length > 0 ? (
            menu.map((item, index) => (
              <div key={index} className='cards'>
                {/* <h1>ID: {item.id}</h1>
                <p><b>Recipe:</b> "{item.name}"</p>
                <p><b>Ingredients:</b>"{item.ingredients.join(',')}"</p>
                <p><b>CookTime:</b> "{item.cookTimeMinutes}"</p>
                <p><b>Rating:</b> {item.rating}</p>
                <p><b>Preparation Time: </b>"{item.prepTimeMinutes} minutes"</p> */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: 'auto', marginTop: '10px' }}
                  />
                )}
                 <h3>ID: {item.id}</h3>
                <p><b>Recipe Name:</b> "{item.name}"</p>
              </div>
            ))
          ) : (
            <p>Loading recipes...</p>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
