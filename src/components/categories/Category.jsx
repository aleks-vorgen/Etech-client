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

    const handleMouseEnter = (categoryId) => {
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
                        onMouseEnter={() => handleMouseEnter(category.id)}
                        onMouseLeave={() => handleMouseLeave(category.id)}
                    >
                        <Link to={`/products/category/category=${category.title}`}>{category.title}</Link>
                        {renderChildCategories(category)}
                    </li>
                ))}
            </ul>
        );
    };

    const rootCategories = categories.filter(
        (category) => !category.parentCategory
    );

    return (
        <ul>
            {rootCategories.map((category) => (
                <li
                    key={category.id}
                    onMouseEnter={() => handleMouseEnter(category.id)}
                    onMouseLeave={() => handleMouseLeave(category.id)}
                    className={activeCategoryIds.includes(category.id) ? "active" : ""}
                >
                    <div
                        onClick={() => handleClick(category)}
                        className={category.parentCategory ? "parent-category" : ""}
                    >
                        {category.parentCategory ? (
                            category.title
                        ) : (
                            <Link to={`/products/${category.title}`}>{category.title}</Link>
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