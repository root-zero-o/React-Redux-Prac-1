import React from "react";

// Container에서 props로 받은 것들을 파라미터에 작성
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {

    // 버튼 이벤트
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10)); // e.target.value를 10진법으로 변환해서 넣어. 넣으면 diff
    };

    return (
        <div>
            {/* 보여줄 숫자 */}
            <h1>{number}</h1>
            <div>
                {/* input창에 띄워줄 숫자, diff의 값을 가져와서 보여줌 */}
                <input type="number" value={diff} min="1" onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Counter;
