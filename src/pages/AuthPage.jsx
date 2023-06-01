import React from 'react'
import axios from "axios";
import {local} from "../env.js"
import {useDispatch} from "react-redux";
import {saveToken} from "../store/actions/authActions.js";
import {useNavigate} from "react-router-dom"

export function AuthPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        let username = e.target.username.value;
        let password = e.target.password.value;

        await axios.post(local + '/auth/login', {username, password})
            .then(response => {
                dispatch(saveToken(response.data.token, response.data.username, response.data.role));
                navigate('/');
            })
            .catch(e => {
                console.log(e.message)
            })
    }

    return (
        <div className='w-[1110px] mx-auto' onSubmit={handleSubmit}>
            <form className='w-min mx-auto my-20'>
                <label htmlFor="username" className='text-md block'>Логін</label>
                <input type="text" name='username' id='username' placeholder='Логін'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required/>

                <label htmlFor="password" className='text-md block mt-3'>Пароль</label>
                <input type="password" name='password' id='password' placeholder='Пароль'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required/>

                <button className='button blue-button block mx-auto w-min mt-3'>
                    Увійти
                </button>
            </form>
        </div>
    )
}

