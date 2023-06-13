import React, {useEffect, useState} from 'react'
import axios from "axios";
import {server} from "../../../env.js";
import {useSelector} from "react-redux";
import Modal from "react-modal";

export default function ProductAddEdit({open, toggleModal}) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [categories, setCategories] = useState(null);
    const {token} = useSelector((state) => state.auth);

    useEffect(() => {

        axios.get(server + '/admin/categories/child', {
            headers: {
                Authorization: `Bearer_${token}`
            }
        })
            .then(response => {
                setCategories(response.data)
            }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    function handleProductSubmit(e) {
        e.preventDefault();
        const productData = getProductData(e.target);
        axios.post(server + '/admin/products/product', productData, {
            headers: {
                Authorization: `Bearer_${token}`
            }
        }).then((response) => {
            const formData = new FormData();
            formData.append('file', selectedFile, response.data.imgPath)

            axios.post(server + '/images/product', formData)
                .then(response => {
                    console.log(response.status)
                })
                .catch(error => console.log(error))
        }).catch((error) => console.error(error))
    }

    function getProductData(data) {
        const title = data.title.value;
        const category = data.category.value;
        const price = data.price.value;
        const producer = data.producer.value;
        const discount = data.discount.value;
        const amount = data.amount.value;
        const description = data.description.value;

        return {
            category: category,
            title: title,
            price: price,
            producer: producer,
            discount: discount,
            amount: amount,
            description: description,
        }
    }

    return (
        <div>
            <Modal isOpen={open} onRequestClose={toggleModal} className='cartModal' overlayClassName='cartOverlay'>
                <form onSubmit={handleProductSubmit} className='cartBody'>
                    <input type="number" value={id && id} hidden />
                    <input type="text" name='title' id='title' placeholder='Назва' required
                           className='block border border-black/20 rounded-[3px] py-1 px-3 w-full mb-5'/>
                    <select name='category' id='category' required defaultValue={0}

                            className='border border-black/20 rounded-[3px] py-2 px-3 w-full mb-5'>
                        <option value="0" disabled>Категорія</option>
                        {
                            categories && categories.map(category => (
                                <option key={category.id} value={category.id}>{category.title}</option>
                            ))
                        }
                    </select>

                    <input type="number" name='price' id='price' placeholder='Ціна' min='1' required
                           className='block border border-black/20 rounded-[3px] py-1 px-3 w-full mb-5'/>

                    <input type="text" name='producer' id='producer' placeholder='Виробник' required
                           className='block border border-black/20 rounded-[3px] py-1 px-3 w-full mb-5'/>

                    <input type="number" name='discount' id='discount' placeholder='Знижка' min='0' max='100' required
                           className='block border border-black/20 rounded-[3px] py-1 px-3 w-full mb-5'/>

                    <input type="number" name='amount' id='amount' placeholder='Кількість' min='1' required
                           className='block border border-black/20 rounded-[3px] py-1 px-3 w-full mb-5'/>

                    <textarea name='description' id='description' placeholder='Опис' minLength='20' required
                              className='block border border-black/20 rounded-[3px] py-1 px-3 w-full mb-5'/>

                    <input type="file" name='image' id='image' onChange={handleFileChange} required
                           className='block mb-5'/>

                    <button className='button blue-button'>Додати товар</button>
                </form>
            </Modal>
        </div>
    )
}