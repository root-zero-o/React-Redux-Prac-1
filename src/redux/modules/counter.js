/* 1단계 : 액션 타입 만들기 */
// 다른 모듈과 이름 중복방지를 위해 이렇게 만듦
const SET_DIFF = 'counter/SET_DIFF'; // 이게 뭐지? 폴더이름? 파일이름?
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 2단계 : 액션 생성함수 만들기 */
// 내가 밖에서 사용할 액션 함수를 만든다. export 빼먹지 말기
export const setDiff = diff => ({ type: SET_DIFF, diff}); // 여기서 diff는 key값
export const increase = () => ({ type: INCREASE }); 
export const decrease = () => ({ type: DECREASE });

/* 3단계 : 초기 상태 선언 */
// 제일 처음 store가 가질 초기값!
const initialState = {
    number: 0, // 화면에 보여줄 초기값 -?????
    diff: 1 // input에 띄워줄 초기값 - ????????
}

/* 4단계 : 리듀서 선언 */
// 리듀서는 합치는 애가 받아야 함 -> export
export default function counter( state = initialState, action ) {

    // 사용할 액션타입에 따른 함수만 적용되게끔 switch case 사용!
    switch (action.type){

        // SET_DIFF 타입이라면, 아래 case 발동
        case SET_DIFF:
            return {...state, diff: action.diff}; 
        
        // INCREASE 타입이면, 아래 case 발동
        case INCREASE:
            return {...state, number: state.number + state.diff};

        // DECREASE 타입이면, 아래 case 발동
        case DECREASE:
            return {...state, number: state.number - state.diff};

        default:
            return state;
    }
}