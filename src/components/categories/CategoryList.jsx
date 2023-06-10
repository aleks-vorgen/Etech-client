import React, {useEffect, useState} from "react";
import axios from "axios";
import {server} from "/src/env.js"
import {Link} from "react-router-dom";
import "./CategoryList.css"
import {useSelector} from "react-redux";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [openCategory, setOpenCategory] = useState(null);
    const {token} = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get(server + "/categories/all").catch(console.log)
            setCategories(response.data);
        };

        fetchCategories();
    }, []);

    const config = {
        headers: {
            Authorization: `Bearer_${token}`,
        }
    }

    const handleMouseClick = (categoryId) => {
        setOpenCategory(categoryId);
    };

    return (
        <ul className="root-category-list">
            {categories.length === 0 ? <li>Loading...</li> : categories.map((category) => (
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
                                            <Link to={`/products/category/${childCategory.title}`}>
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