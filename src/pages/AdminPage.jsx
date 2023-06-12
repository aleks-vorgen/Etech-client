import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {server, roles} from "../env.js";
import axios from "axios";


export function AdminPage() {
    const {token, role} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        if (role !== roles.ADMIN)
            navigate("/")
    })

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

        console.log(productData)

        axios.post(server + '/admin/products/product', productData, {
            headers: {
                Authorization: `Bearer_${token}`
            }
        })
            .then((response) => {
                const formData = new FormData();
                formData.append('file', selectedFile, response.data.imgPath)

                axios.post(server + '/images/product', formData)
                    .then(response => {
                        console.log(response.status)
                    })
                    .catch(error => console.log(error))

                console.log(response.status)
            })
            .catch((error) => console.error(error))
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
        <div className='w-[1110px] mx-auto my-10'>
            <form onSubmit={handleProductSubmit} className='w-max' encType="multipart/form-data">
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
        </div>
    )
}