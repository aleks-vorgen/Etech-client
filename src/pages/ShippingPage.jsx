import React, {useState} from 'react'
import {useSelector} from "react-redux";
import CartItem from "../components/cart/CartItem.jsx";
import './ShippingPage.css'
import axios from "axios";
import {server} from '../env.js'
import Alert from "../ui/Alert.jsx";


export function ShippingPage() {
    const [inputValue, setInputValue] = useState('');
    const [alertSuccess, setAlertSuccess] = useState(null);
    const [alertError, setAlertError] = useState(null);
    const [orderAlertBody, setOrderAlertBody] = useState(null);
    const {cart} = useSelector((state) => state.cart);
    const {lastname, firstname, middlename, email} = useSelector((state) => state.auth);

    async function handleOrderSubmit(e) {
        e.preventDefault();
        setAlertSuccess(false);
        setAlertError(false);
        const data = getData(e.target)
        if (data !== null) {
            await axios.post(server + '/orders/order', data)
                .then(response => {
                    setOrderAlertBody(response.data.id);
                    setAlertError(false)
                    setAlertSuccess(true)
                })
                .catch(e => {
                    console.log(e.response.data)
                    setOrderAlertBody(e.response.data);
                    setAlertSuccess(false)
                    setAlertError(true)
                })
        }
    }

    function handleOnChange(e) {
        setInputValue(e.target.value);
    }

    function getData(data) {
        const lastname = data.lastname.value.replaceAll(' ', '');
        const firstname = data.firstname.value.replaceAll(' ', '');
        const middlename = data.middlename.value.replaceAll(' ', '');
        const phone = data.phone.value.replaceAll(' ', '');
        const email = data.email.value.replaceAll(' ', '');
        const comment = data.comment.value;
        for (let i = 0; i < phone.length; i++) {
            if (!['+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(phone[i])) {
                setOrderAlertBody("Номер телефону повинен містити тільки цифри")
                setAlertError(true)
                return null;
            }
        }
        return {
            lastname: lastname,
            firstname: firstname,
            middlename: middlename,
            phone: phone,
            email: email,
            comment: comment,
            productList: cart,
        }
    }

    function getDeclension() {
        const lastDigit = cart.length % 10;
        const lastTwoDigits = cart.length % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return 'товарів';
        } else if (lastDigit === 1) {
            return 'товар';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'товари';
        } else {
            return 'товарів';
        }
    }

    return (
        <div className='w-[1110px] mx-auto my-10 flex'>
            <form onSubmit={handleOrderSubmit} className='flex'>
                <div>
                    <p className='font-bold text-[24px]'>Оформлення замовлення</p>
                    <hr className='border-black/20 my-5'/>
                    <div className='order-listing'>
                        {cart.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))}
                    </div>
                    <hr className='border-black/20 my-5'/>
                    <div className='contacts'>
                        <div className="grid grid-cols-3 justify-center">
                            <div>
                                <label htmlFor="lastname">Прізвище</label>
                                <input type="text" name='lastname' id='lastname' value={lastname || undefined}
                                       onChange={handleOnChange} required/>
                            </div>
                            <div>
                                <label htmlFor="firstname">Ім'я</label>
                                <input type="text" name='firstname' id='firstname' value={firstname || undefined}
                                       onChange={handleOnChange} required/>
                            </div>
                            <div>
                                <label htmlFor="middlename">Побатькові</label>
                                <input type="text" name='middlename' id='middlename' value={middlename || undefined}
                                       onChange={handleOnChange} required/>
                            </div>

                            <div>
                                <label htmlFor="phone">Номер телефону</label>
                                <input type="tel" name='phone' id='phone' required minLength='10' maxLength='15'/>
                            </div>
                            <div>
                                <label htmlFor="email">Пошта</label>
                                <input type="email" name='email' id='email' value={email || undefined}
                                       onChange={handleOnChange} required/>
                            </div>
                        </div>
                    </div>
                    <div className='comments w-full'>
                        <div>
                            <label htmlFor="comment">Коментар до замовлення</label>
                            <textarea name='comment' id='comment'/>
                        </div>
                    </div>
                </div>
                <div className="order-summary">
                    <p className='font-bold text-[24px]'>Разом</p>
                    <div>
                        <div>{cart.length} {getDeclension()} на суму</div>
                        <div>{cart.reduce((sum, item) => sum + item.price, 0)}</div>
                    </div>
                    <div>
                        <div>До сплати</div>
                        <div>{cart.reduce((sum, item) => sum + item.price, 0)}</div>
                    </div>
                    <button className='button orange-button mt-5 w-full'>Підтвердити замовлення</button>
                </div>
            </form>
            {orderAlertBody !== null &&
                <div>
                    <Alert alert={'success'} header={'Замовлення прийнято успішно'}
                           body={`Номер замовлення №${orderAlertBody}`} open={alertSuccess}/>
                    <Alert alert={'error'} header={'Помилка при оформленні замовлення'}
                           body={`${orderAlertBody}`} open={alertError}/>
                </div>
            }
        </div>
    )
}

export default ShippingPage