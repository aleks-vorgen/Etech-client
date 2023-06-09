import React from 'react'
import axios from "axios";
import {server} from "../env.js"
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import {saveToken} from "../store/reducers/authReducer.js";

export function AuthPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        let username = e.target.username.value;
        let password = e.target.password.value;

        await axios.post(server + '/auth/login', {username, password})
            .then(response => {
                dispatch(saveToken(response.data));
                navigate('/');
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div className='w-[1110px] mx-auto my-10'>
            <form className='w-min mx-auto' onSubmit={handleSubmit}>
                <label htmlFor="username" className='text-md block'>Логін</label>
                <input type="text" name='username' id='username' placeholder='Логін'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required/>

                <label htmlFor="password" className='text-md block mt-3'>Пароль</label>
                <input type="password" name='password' id='password' placeholder='Пароль'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required/>

                <button className='button orange-button block mx-auto w-min mt-3'>
                    Увійти
                </button>
                <div className='border-b border-black/20 mt-3'></div>
                <Link to='/registration'
                      className='block text-center mt-1 text-blue hover:text-clicked-blue hover:scale-105 transition-transform'>
                    Зареєструватися
                </Link>
            </form>
        </div>
    )
}

