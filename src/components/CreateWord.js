import { React, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const CreateWord = () => {
    const days = useFetch(`http://localhost:3001/days/`);
    const words = useFetch(`http://localhost:3001/words/`);
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
        <div className="add_word">
            <h3>
                현재 <span>{words.length}</span>개의 단어를 공부했습니다
            </h3>
            <form onSubmit={onSubmit}>
                <div className="eng_word">
                    <input
                        id="eng"
                        type="text"
                        placeholder="book"
                        ref={engRef}
                    />
                    <label htmlFor="eng">단어 입력</label>
                </div>
                <div className="kor_word">
                    <input id="kor" type="text" placeholder="책" ref={korRef} />
                    <label htmlFor="kor">뜻 입력</label>
                </div>
                <select id="select_day" ref={dayRef}>
                    {days.map((day) => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
                <label className="select_day_label" htmlFor="select_day">
                    날짜 선택
                </label>
                <button onClick={saveWord}>저장</button>
            </form>
        </div>
    );
};

export default CreateWord;
