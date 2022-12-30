import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="todo_list">
                <Link to="/">영어단어장</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="create_word">
                    단어 추가
                </Link>
                <Link to="/create_day" className="create_day">
                    Day 추가
                </Link>
            </div>
        </header>
    );
};

export default Header;
