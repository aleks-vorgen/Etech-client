import axios from 'axios';

const API_BASE_URL = 'https://etech-5fydkirpga-lm.a.run.app'; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories/all');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/categories/all/${categoryId}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Example API functions
export const fetchProducts = async () => {
  try {
    const response = await api.get('/products/all');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/all/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Add more API functions as needed

export default api;
