import { configureStore } from '@reduxjs/toolkit'; // 從redux 中引入 createStore，並把剛剛創建的 reducer 傳入（如需傳入多個 reducer 可以使用 applyMiddleware）
import themeReducer from '../reducers/themeReducer';

export default () => {
    const store = configureStore({
        reducer: themeReducer,
    });

    return store;
}