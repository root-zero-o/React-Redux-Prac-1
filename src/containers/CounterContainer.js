import React from 'react';

// 값을 수정하기 위해 import
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter'; 

// counter reducer에서 가져온 액션 함수
import { increase, decrease, setDiff } from '../redux/modules/counter';

function CounterContainer() {

    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
    // 비구조화로 객체의 경우 좌항과 우항이 매칭된다.
    const { number, diff } = useSelector(state => ({
        number : state.counter.number, // 왜 counter.number 야?? counter는 그냥 state값 업데이트 해주는 애잖아.
        diff : state.counter.diff // 그냥 state.diff라고 해야하는거 아님??? counter라는 리듀서가 호출되면 state값이 바뀌잖아. 
    }));

    // 그냥 CRUD 할때 무조건 dispatch를 써야해. 그래서 선언
    const dispatch = useDispatch(); // 이건 왜 선언하는데? 그냥 useDispatch쓰면 되는거 아님?

    // 함수를 만드는데, 그 함수를 dispatch를 이용해서 reducer에서 만든 애들을 불러와야해
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            //상태와
            number={number}
            diff={diff}
            // 액션을 디스패치하는 함수들을 props로 넣어줌
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;