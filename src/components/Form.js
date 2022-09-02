import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
        </div>
    )
}

export default Form;