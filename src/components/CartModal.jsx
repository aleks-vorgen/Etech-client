import React, {useState} from "react";
import Modal from "react-modal"
import './CartModal.css';
import {useSelector} from "react-redux";
import CartItem from "./cart/CartItem.jsx";
import {Link} from "react-router-dom";

Modal.setAppElement('#root')

//TODO
export default function CartModal() {
    const {cart} = useSelector((state) => state.cart)
    const [open, setOpen] = useState(false);


    const toggleModal = () => setOpen(!open);

    return (
        <div className='h-[35px]'>
            <button onClick={toggleModal}
                    className='px-3 rounded-[3px] hover:bg-blue/10 transition-all duration-400 active:bg-clicked-blue/20'>
                <img src='/images/cart.svg' alt='cart.svg' className=''/>
            </button>

            <Modal isOpen={open} onRequestClose={toggleModal} className='cartModal' overlayClassName='cartOverlay'>
                <div className='cartHeader'>Кошик</div>

                <div className="cartBody">
                    {
                        cart.length > 0 ? cart.map(item => (
                                <CartItem key={item.id} item={item}/>
                            )) :
                            <Link to='/products' onClick={toggleModal}>В кошику немає товарів<br />Натисніть сюди, щоб обрати щось цікавеньке</Link>
                    }
                </div>

                <Link to={'/shipping'} className={`button orange-button ${cart.length === 0 && 'hidden'}`} onClick={toggleModal}>Оформити замовлення</Link>
                <button className='x-button' onClick={toggleModal}>x</button>
            </Modal>
        </div>
);
}