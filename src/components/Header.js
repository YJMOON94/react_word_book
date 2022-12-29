import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="todo_list">
                <Link to="/">오늘의 할일</Link>
            </h1>
            <div className="menu">
                <Link to="#x">단어 추가</Link>
                <Link to="#x">Day 추가</Link>
            </div>
        </header>
    );
};

export default Header;
