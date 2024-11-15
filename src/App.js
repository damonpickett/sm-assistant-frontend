import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextInput from './TextInput';
import TextDisplay from './TextDisplay';
import PostGenerator from './PostGenerator';

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<TextInput />} />
                  <Route path="/library" element={<TextDisplay />} />
                  <Route path="/postgenerator" element={<PostGenerator />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;

