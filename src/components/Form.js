import React,{ useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../actions/themeAction';

const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const darkTheme = useSelector(state => state.darkTheme);

    useEffect(() => {
        if(darkTheme) {
            document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
        }else{
            document.body.style.backgroundColor = "white";
        }
    },[darkTheme]);

    const handleSubmit = (e) => {
        e.preventDefault(); //e.preventDefault 阻止了 form 的預設行為，使我們可以針對送出表單做進一步的客製化處理
        props.setFormDone(true);
        setEmail('');
        setPassword('');
        navigate('/counter', { replace: true });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <input type="submit" value="submit" />
            </form>
            {props.formDone ? "成功填寫表單" : "表單未完成"}
            <button onClick={() =>  dispatch(changeTheme())}>change theme</button>
        </div>
    )
}

export default Form;