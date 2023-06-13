import React, {useEffect, useState} from 'react'
import {server} from '../../../env.js'
import axios from "axios";
import './ProductTableList.css'
import ProductAddEdit from "./ProductAddEdit.jsx";
import {useSelector} from "react-redux";

export default function ProductTableList() {
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false);
    const {token} = useSelector(state => state.auth)
    const toggleModal = () => setOpen(!open);

    useEffect(() => {
        axios.get(server + '/products/all')
            .then(response => setProducts(response.data))
            .catch(console.log)
    }, [products])

    function handleEdit(e) {

    }

    function handleDelete(e) {
        const id = e.target.id
        axios.delete(server + '/admin/products/' + id, {
            headers: {
                Authorization: `Bearer_${token}`
            }
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(console.log)
    }

    return (
        <div>
            <button className='button orange-button mb-3' onClick={toggleModal}>Додати</button>
            <ProductAddEdit open={open} toggleModal={toggleModal}/>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Назва</th>
                    <th>Категорія</th>
                    <th>Виробник</th>
                    <th>Ціна</th>
                    <th>Знижка</th>
                    <th>Кількість</th>
                    <th>Опис</th>
                    <th>Зображення</th>
                    <th>Опції</th>
                </tr>
                </thead>
                <tbody>
                {
                    products && products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className='max-w-[150px] truncate' title={product.title}>{product.title}</td>
                            <td>{product.category.title}</td>
                            <td>{product.producer}</td>
                            <td>{product.price} ₴</td>
                            <td>{product.discount}%</td>
                            <td>{product.amount} шт.</td>
                            <td className='max-w-[150px] truncate' title={product.description}>{product.description}</td>
                            <td>
                                <img src={server + '/images/product/' + product.imgPath} alt="Помилка"
                                     className='max-w-[50px] mx-auto'/>
                            </td>
                            <td>
                                <button onClick={handleEdit} className='mr-3'>
                                    <img src="/images/pencil.png" alt="" className={'w-[25px]'} id={product.id} />
                                </button>
                                <button onClick={handleDelete}>
                                    <img src="/images/x.png" alt="" className={'w-[25px]'} id={product.id} />
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}