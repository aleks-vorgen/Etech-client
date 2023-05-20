import React, {useEffect, useState} from "react";
import axios from "axios";
import {server, local} from "/src/env.js"
import {Link} from "react-router-dom";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [openCategory, setOpenCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                //const response = await axios.get(server + "/categories/all");
                const response = await axios.get(server + "/categories/all");
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    const handleMouseClick = (categoryId) => {
        setOpenCategory(categoryId);
    };

    return (
        <ul className="border border-black/20 rounded-[3px] h-min w-full px-3 pb-3">
            {categories.map((category) => (
                category.childCategories.length > 0 && (
                    <li
                        key={category.id}>
                        <p
                            onClick={() => handleMouseClick(category.id)}
                            className="py-3 border-b border-black/20 cursor-pointer">
                            {category.title}
                        </p>
                        {openCategory === category.id && (
                            <ul className='mt-3'>
                                {category.childCategories.map((childCategory) => (
                                    <li key={childCategory.id}>
                                        <p className="border-b border-black/20 cursor-pointer ml-5">
                                            <Link
                                                to={`/products/category/category=${childCategory.title}`}>{childCategory.title}</Link>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                )))}
        </ul>
    );
};

export default CategoryList;