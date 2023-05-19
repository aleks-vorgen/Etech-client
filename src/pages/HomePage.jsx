import React, {useState} from 'react'
import axios from 'axios'
import Category from '../components/categories/Category';

export function HomePage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post('http://localhost:8080/images/product', formData)
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
        <div className='w-[1110px] mx-auto'>
            <h2>Головна</h2>

            <Category/>

            <div>
                <input type="file" onChange={handleFileChange}/>
                <button onClick={handleUpload}>Upload</button>
            </div>

        </div>
    )
}

export default HomePage