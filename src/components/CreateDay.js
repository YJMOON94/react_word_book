import { React, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
const CreateDay = () => {
    useEffect(() => {});
    const days = useFetch(`http://localhost:3001/days`);
    const navigate = useNavigate();

    const saveDay = () => {
        fetch(`http://localhost:3001/days`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then((res) => {
            if (res.ok) {
                alert('날짜가 추가되었습니다');
                navigate('/react');
            }
        });
    };
    return (
        <div className="add_day">
            <h3>
                현재 <span>{days.length}</span> 일째 연습중 입니다.
            </h3>
            <button onClick={saveDay}>날짜 추가하기</button>
        </div>
    );
};

export default CreateDay;
