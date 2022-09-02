import React, { useEffect, useState } from 'react';

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

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>count: {props.count}</p>
            <div>&nbsp;&nbsp;</div>
            <button style={{width: '30px', height: '30px'}} onClick={() => props.setCount(props.count + 1)}>+</button>
            <p style={{marginRight: '30px'}}>count 的 prop 被更改了 { changeTime } 次!</p>
        </div>
    )
}

export default Counter;