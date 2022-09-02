import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const DetailTitle = styled.div`
    color: white;
    width: 200px;
    border: none;
    border-radius: 5px;
    background-color: #228ee0;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    padding: 5px 2px;
`

// 搭配 props 使用
const Title = styled.div`
    padding: 20px 0 0 20px;
    font-size: 48px;
    color: ${props => (props.skyblue ? 'skyblue' : 'black')};
`

const Counter = (props) => {
    const [ changeTime, setChangeTime ] = useState(0);

    // useEffect(() => {
    //     console.log('This is like componentDidMount')
    //     return () => {
    //       console.log('This is like componentWillUnmount')
    //     };
    // }, []);
    // useEffect(() => {
    //     console.log('This is like componentDidUpdate, I will be triger whenever count state change')
    // },[count])

    useEffect(() => {
        props.setCount(100) //因為第二個參數傳入空陣列，因此只會跑一次
        console.log('test1')
    },[])
    useEffect(() => {
        setChangeTime(changeTime + 1);
        console.log('test2')
    },[props.count])

    const countStyle = {
        color: 'purple',
        fontSize: '15px'
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Title skyblue={true}>This is my title</Title>
            <p style={countStyle}>count: {props.count}</p>
            <div>&nbsp;&nbsp;</div>
            <button style={{width: '30px', height: '30px'}} onClick={() => props.setCount(props.count + 1)}>+</button>
            <p style={{marginRight: '30px'}}>count 的 prop 被更改了 { changeTime } 次!</p>

            {/* 三元運算子 - condition? 'do something if condition is true' : 'do something else if condition is false' */}
            { changeTime > 8 ? <h5 style={{color: 'red'}}>改動太多次啦</h5> : null }
            {/* &&運算元 - (如果這個condition成立) ＆＆ （就執行這個 statement） */}
            { props.count > 10 && <h5 style={{color: 'red'}}>count 太大啦</h5> }

            <DetailTitle>單次掃描資訊</DetailTitle>
        </div>
    )
}

export default Counter;