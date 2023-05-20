import React from 'react';

const Category = ({ category, onClick }) => {
    const handleClick = () => {
        onClick(category);
    };

    return (
            <div onClick={handleClick}>{category.title}</div>
    );
};

export default Category;