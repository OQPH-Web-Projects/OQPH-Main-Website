import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import Workshop from '../Workshop/Workshop';

export default function App() {
    return (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workshop" element={<Workshop />} />
            </Routes>
          </BrowserRouter>
        </div>
    );
}
