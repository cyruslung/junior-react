// 第一個 hook - useState
// state 是 component 內部的變數，用來控制 component 內部元件的顯示狀態，state 的改變是非同步的
// state 是讓元件控制自己本身的狀態
// props 是讓外部元件對自己進行狀態配置
// state 可以改變，而 props 卻是唯讀的，不能被改變
// 常見的狀況是父層元件將自己的 state 傳給子元件當作子元件的 props，形成多層的單向資料流
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // 進行型別檢查

const Counter = (props) => {
    // counter 為 state 變數，setCounter 則是負責改變 state 變數的函式
    const [ count, setCount ] = useState(0);
    const countStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={countStyle}>
            <h3>{props.title}</h3>
            <div>&nbsp;&nbsp;</div>
            <p style={{marginRight: '30px'}}>count:  { props.count }</p>
            <button style={{width: '30px', height: '30px'}} onClick={() => props.setCount(props.count + 1)}>+</button>
        </div>
    )
}

Counter.prototype = {
    count: PropTypes.number, //數字
    setCount: PropTypes.func, //函式
    title: PropTypes.string //字串
};

export default Counter;