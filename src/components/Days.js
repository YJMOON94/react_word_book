import { React } from 'react';
import { useParams } from 'react-router-dom';
// import todo_data from '../data/data.json';

import Word from './Word';
import useFetch from '../hooks/useFetch';
const Days = () => {
    const { day } = useParams();
    const word = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <ul className="todo">
            {word.map((word) => (
                <Word key={word.id} word={word} />
            ))}
        </ul>
    );
};

export default Days;
