import { React, useState } from 'react';
import PropTypes from 'prop-types';

const Word = ({ word }) => {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const del = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            console.log('삭제되었습니다.');
        }
    };

    const toggleDone = () => {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        }).then((res) => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
        // setIsDone(!isDone);
    };

    const toggleShow = () => {
        setIsShow(!isShow);
    };

    return (
        <li className={isDone ? 'done' : ''}>
            <ul className="todo_inner">
                <li>
                    <input
                        type="checkbox"
                        checked={isDone}
                        onChange={toggleDone}
                    />
                </li>
                <li>
                    <span>{word.eng}</span>
                    <span>{isShow && word.kor}</span>
                </li>
                <li>
                    <button onClick={toggleShow} className="btn_check">
                        {isShow ? '뜻 숨기기' : '뜻 보기'}
                    </button>
                    <button className="btn_del" onClick={del}>
                        삭제
                    </button>
                </li>
            </ul>
        </li>
    );
};

Word.propTypes = {
    word: PropTypes.object,
};

export default Word;
