import React from 'react'
import axios from "axios";
import {local} from "../env.js"
import {useDispatch} from "react-redux";
import {saveToken} from "../store/actions/authActions.js";

export function AuthPage() {
    const dispatch = useDispatch();

    async function handleSubmit(e) {
        e.preventDefault()
        let username = e.target.username.value;
        let password = e.target.password.value;

        await axios.post(local + '/auth/login', {username, password})
            .then(response => {
                dispatch(saveToken(response.data.token, response.data.username))
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

                <button type='submit'
                        className='block mx-auto w-min border border-black/20 rounded-[3px] mt-3 py-1 px-5
                        text-white bg-blue active:bg-clicked-blue transition-all'>
                    Увійти
                </button>
            </form>
        </div>
    )
}

