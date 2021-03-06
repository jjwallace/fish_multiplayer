import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './App';

import * as serviceWorker from './serviceWorker';

import Home from "./pages/Home";
import Player from "./pages/Player";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="player" element={<Player />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }



ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
