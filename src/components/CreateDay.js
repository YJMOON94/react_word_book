import { React } from 'react';
import useFetch from '../hooks/useFetch';
const CreateDay = () => {
    const days = useFetch(`http://localhost:3001/days`);

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
            }
        });
    };
    return (
        <div className="input_area">
            <h3>현재 날짜는 {days.length} 일 입니다.</h3>
            <button onClick={saveDay}>날짜 추가하기</button>
        </div>
    );
};

export default CreateDay;
