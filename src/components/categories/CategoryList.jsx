import React, {useEffect, useState} from "react";
import axios from "axios";
import {server, local} from "/src/env.js"
import {Link} from "react-router-dom";
import "./CategoryList.css"

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [openCategory, setOpenCategory] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
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
        <ul className="root-category-list">
            {categories.map((category) => (
                category.childCategories.length > 0 && (
                    <li key={category.id}>
                        <p onClick={() => handleMouseClick(category.id)}>
                            {category.title}
                        </p>
                        {openCategory === category.id && (
                            <ul className='child-category-list'>
                                {category.childCategories.map((childCategory) => (
                                    <li key={childCategory.id}>
                                        <p>
                                            <Link to={`/products/category/category=${childCategory.title}`}>
                                                {childCategory.title}
                                            </Link>
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