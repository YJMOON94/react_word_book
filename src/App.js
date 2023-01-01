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
            <div className="word_book">
                <Header />
                <Routes>
                    <Route path="/react/" element={<DayList />} />
                    <Route path="/react/create_word" element={<CreateWord />} />
                    <Route path="/react/create_day" element={<CreateDay />} />
                    <Route path="/react/day/:day" element={<Days />} />
                    <Route path="*" element={<LinkError />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
