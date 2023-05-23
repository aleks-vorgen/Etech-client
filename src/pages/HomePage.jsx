import React, {useState} from 'react'
import axios from 'axios'
import Category from '../components/categories/CategoryList.jsx';
import Carousel from "../ui/Carousel.jsx";
import ProductPopular from '../components/products/ProductPopular.jsx';
import ProductNew from '../components/products/ProductNew.jsx';

export function HomePage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUploadProduct = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post('https://etech-5fydkirpga-lm.a.run.app/images/product', formData)
                .then((response) => {
                    console.log(response.status);
                    // Добавьте здесь необходимую логику после успешной загрузки файла
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                    // Добавьте здесь необходимую обработку ошибок
                });
        }
    };

    const handleUploadCategory = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post('https://etech-5fydkirpga-lm.a.run.app/images/category', formData)
                .then((response) => {
                    console.log(response.status);
                    // Добавьте здесь необходимую логику после успешной загрузки файла
                })
                .catch((error) => {
                    console.error('Error uploading file:', error);
                    // Добавьте здесь необходимую обработку ошибок
                });
        }
    };

    return (
        <div >
            <div className='flex w-[1110px] mx-auto my-10'>
                <Category />
                <Carousel />
            </div>
            <div className='flex w-[1110px] mx-auto my-10'>
                <ProductPopular />
            </div>
            

            
                <img className='w-full mx-auto flex items-start w-max[1]' src="src/images/sale/hot-sale.png" alt="hot-sale" />

            <div className='flex w-[1110px] mx-auto my-10'>
                <ProductNew />
            </div>
            

           {/* <div className='mt-10'>
                <p>Называть id.png (где id - айдишник продукта)</p>
                <input type="file" onChange={handleFileChange}/>
                <button onClick={handleUploadProduct}>Upload Product (.png)</button>
            </div>
            <div>
                <p>Называть id.svg</p>
                <input type="file" onChange={handleFileChange}/>
                <button onClick={handleUploadCategory}>Upload Category (.svg)</button>
            </div>
        */}

        </div>
    )
}

export default HomePage