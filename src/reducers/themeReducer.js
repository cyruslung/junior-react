const initialState = {
    darkTheme: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {  // 根據不同的 action type 對 state 做操作
        case 'CHANGE_THEME':
            return {
                ...state,  // 一般我們不會直接改變 state 的值，而是重新創建一個 state 物件，以避免不可預期的 bug
                darkTheme: !state.darkTheme  // 將目前的 state 的值加進新的物件，並針對要改變的部分改動，最後回傳新的物件當作新的 state
            }
        default:
            return state  // 在沒有對應 case 時會回傳原有的 state
    }
}

export default reducer;