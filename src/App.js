import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import DayList from './components/DayList';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';
import Days from './components/Days';
import LinkError from './components/LinkError';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/create_word" element={<CreateWord />} />
                <Route path="/create_day" element={<CreateDay />} />
                <Route path="/day/:day" element={<Days />} />
                <Route path="*" element={<LinkError />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
