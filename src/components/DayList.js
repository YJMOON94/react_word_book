import { React } from 'react';
import { Link } from 'react-router-dom';
import UseFetch from '../hooks/useFetch';

const DayList = () => {
    // const [days, setDays] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setDays(data);
    //         });
    // }, []);
    const days = UseFetch('http://localhost:3001/days');
    return (
        <ul className="list">
            {days.map((todo) => (
                <li key={todo.id}>
                    <Link to={`/day/${todo.day}`}>{todo.day}</Link>
                </li>
            ))}
        </ul>
    );
};

export default DayList;
