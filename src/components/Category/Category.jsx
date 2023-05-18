import React, { useState, useEffect } from "react";
import axios from "../../services/api";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/categories/all");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.title}
            <Link to={`/products/all/${category.id}`}>{category.title}</Link>
            {Array.isArray(category.parentCategory) && (
              <ul>
                {category.parentCategory.map((child) => (
                  <li key={child.id}>{child.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
