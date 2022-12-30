import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">Word Book</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="create_word">
                    ADD WORD
                </Link>
                <Link to="/create_day" className="create_day">
                    ADD DAY
                </Link>
            </div>
        </header>
    );
};

export default Header;
