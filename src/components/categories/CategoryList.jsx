import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategoryIds, setActiveCategoryIds] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://etech-5fydkirpga-lm.a.run.app/categories/all");
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    const handleMouseClick = (categoryId) => {
        setActiveCategoryIds((prevActiveCategoryIds) => [
            ...prevActiveCategoryIds,
            categoryId,
        ]);
    };

    const handleMouseLeave = (categoryId) => {
        setActiveCategoryIds((prevActiveCategoryIds) =>
            prevActiveCategoryIds.filter((id) => id !== categoryId)
        );
    };

    const handleClick = (category) => {
        if (category.parentCategory) {
            return; // Return early for parent categories
        }

        // Handle the click for non-parent categories
        console.log("Clicked category:", category);
    };

    const renderChildCategories = (parentCategory) => {
        const childCategories = categories.filter(
            (category) =>
                category.parentCategory &&
                category.parentCategory.id === parentCategory.id
        );

        if (childCategories.length === 0) {
            return null;
        }

        return (
            <ul>
                {childCategories.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => handleMouseClick(category.id)}
                        //onMouseLeave={() => handleMouseLeave(category.id)}
                        className='py-3'
                    >
                        <Link to={`/products/category/category=${category.title}`}>{category.title}</Link>
                        {category.parentCategory && renderChildCategories(category)}
                    </li>
                ))}
            </ul>
        );
    };

    const rootCategories = categories.filter(
        (category) => !category.parentCategory
    );

    return (
        <ul className="border border-black/20 rounded-[3px] h-min w-full px-3 pb-3">
            {rootCategories.map((category) => (
                <li key={category.id}
                    onClick={() => handleMouseClick(category.id)}
                    //onMouseLeave={() => handleMouseLeave(category.id)}
                    className="py-3 border-b border-black/20 cursor-pointer">
                    <div onClick={() => handleClick(category)}>
                        {category.parentCategory ? (
                            <Link to={`/products/${category.title}`}>{category.title}</Link>
                        ) : (
                            <p>{category.title}</p>
                        )}
                    </div>
                    {activeCategoryIds.includes(category.id) &&
                        renderChildCategories(category)}
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;