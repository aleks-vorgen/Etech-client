import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {roles} from "../env.js";
import './AdminPage.css'
import ProductTableList from "../components/admin/products/ProductTableList.jsx";


export function AdminPage() {
    const {role} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('products');

    useEffect(() => {
        if (role !== roles.ADMIN)
            navigate("/")
    })

    function handleTabClick(e) {
        setActiveTab(e.target.id)
    }

    return (
        <div className='w-[1110px] mx-auto my-10'>
            <div className="flex mb-4">
                <button className={`tab-button ${activeTab === 'products' && 'text-blue'}`}
                        id='products' onClick={handleTabClick}>Продукти
                </button>

                <button className={`tab-button ${activeTab === 'categories' && 'text-blue'}`}
                        id='categories' onClick={handleTabClick}>Категорії
                </button>

                <button className={`tab-button ${activeTab === 'users' && 'text-blue'}`}
                        id='users' onClick={handleTabClick}>Користувачі
                </button>

                <button className={`tab-button ${activeTab === 'orders' && 'text-blue'}`}
                        id='orders' onClick={handleTabClick}>Замовлення
                </button>
            </div>
                <div className={`p-4 ${activeTab !== 'products' && 'hidden'}`}>
                    <ProductTableList />
                </div>
                <div className={`p-4 ${activeTab !== 'categories' && 'hidden'}`}>
                    <p>Категорії</p>
                </div>
                <div className={`p-4 ${activeTab !== 'users' && 'hidden'}`}>
                    <p>Користувачі</p>
                </div>
                <div className={`p-4 ${activeTab !== 'orders' && 'hidden'}`}>
                    <p>Замовлення</p>
                </div>
        </div>
    )
}