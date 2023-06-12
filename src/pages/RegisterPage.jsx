import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Alert from "../ui/Alert.jsx";
import {local} from '../env.js'
import axios from "axios";

export default function RegisterPage() {
    const [alertSuccess, setAlertSuccess] = useState(null);
    const [username, setUsername] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault()
        setAlertSuccess(false);
        const data = getData(e.target)
        if (data !== null) {
            console.log(data)
            await axios.post(local + '/auth/register', data)
                .then(response => {
                    setUsername(response.data)
                    setAlertSuccess(true)
                })
                .catch(e => {
                    console.log(e.response.data)
                    setAlertSuccess(false)
                })
        }
    }

    function getData(data) {
        const username = data.username.value.replaceAll(' ', '');
        const email = data.email.value.replaceAll(' ', '');
        const password = data.password.value;

        return {
            username: username,
            email: email,
            password: password
        }
    }

    return (
        <div className='w-[1110px] mx-auto my-10'>
            <form className='w-min mx-auto' onSubmit={handleSubmit}>
                <label htmlFor="username" className='text-md block'>Логін</label>
                <input type="text" name='username' id='username' placeholder='Логін'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required minLength='6'/>

                <label htmlFor="email" className='text-md block mt-3'>Пошта</label>
                <input type="email" name='email' id='email' placeholder='Пошта'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required/>

                <label htmlFor="password" className='text-md block mt-3'>Пароль</label>
                <input type="password" name='password' id='password' placeholder='Пароль'
                       className='border border-black/20 rounded-[3px] py-1 px-3'
                       required minLength='6'/>

                <button className='button orange-button block mx-auto w-min mt-3'>
                    Зареєструватися
                </button>
                <div className='border-b border-black/20 mt-3'></div>
                <Link to='/authentication'
                      className='block text-center mt-1 text-blue hover:text-clicked-blue hover:scale-105 transition-transform'>
                    Увійти
                </Link>
            </form>
            <Alert alert='success' header='Ви успішно зареєструвалися'
                   body={`Ласкаво просимо до магазину, ${username}`} open={alertSuccess}/>
        </div>
    )
}