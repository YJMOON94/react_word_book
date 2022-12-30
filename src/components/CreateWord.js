import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const CreateWord = () => {
    const days = useFetch(`http://localhost:3001/days/`);

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const navigate = useNavigate();

    const saveWord = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/words/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false,
            }),
        }).then((res) => {
            if (res.ok) {
                alert('추가완료');
                navigate(`/day/${dayRef.current.value}`);
            }
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="eng_word">
                <input type="text" placeholder="book" ref={engRef} />
                <lbael>영어 입력</lbael>
            </div>
            <div className="kor_word">
                <input type="text" placeholder="책" ref={korRef} />
                <lbael>한글 입력</lbael>
            </div>
            <select className="select_day" ref={dayRef}>
                {days.map((day) => (
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                ))}
            </select>
            <button onClick={saveWord}>저장</button>
        </form>
    );
};

export default CreateWord;
