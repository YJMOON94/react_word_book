import { React } from 'react';
import { Link } from 'react-router-dom';
import UseFetch from '../hooks/useFetch';

const DayList = () => {
    const days = UseFetch('http://localhost:3001/days');
    return (
        <ul className="list">
            {days.map((todo) => (
                <li key={todo.id}>
                    <Link to={`/day/${todo.day}`}>DAY. {todo.day}</Link>
                </li>
            ))}
        </ul>
    );
};

export default DayList;
