import React, {useState} from "react";
import Modal from "react-modal"
import './CartModal.css';
import {useDispatch} from "react-redux";
import CartList from "./cart/CartList.jsx";
import {clearCart} from "../store/reducers/cartReducer.js";

Modal.setAppElement('#root')

//TODO
export default function CartModal() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);


    const toggleModal = () => setOpen(!open);
    const handleApplyOrder = () => {
        dispatch(clearCart);
    }

    return (
        <div>
            <button onClick={toggleModal}>
                <img src='/src/images/cart.svg' alt='cart.svg'/>
            </button>

            <Modal isOpen={open} onRequestClose={toggleModal} className='cartModal' overlayClassName='cartOverlay'>
                <div className='cartHeader'>Кошик</div>

                <CartList />

                <button className='button orange-button' onClick={handleApplyOrder}>Оформити замовлення</button>
                <button className='x-button' onClick={toggleModal}>x</button>
            </Modal>
        </div>
    );
}