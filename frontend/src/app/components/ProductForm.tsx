// C:\Django-Project\django-frontend\src\app\products\page.tsx

import { useState } from 'react';


export default function ProductForm() {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [seller, setSeller] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('product_name', productName);
        formData.append('description', description);
        formData.append('seller', seller);
        formData.append('product_price', productPrice);
        if (image) formData.append('image', image);

        try {
            const response = await fetch('http://127.0.0.1:8000/product/create/', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error('Failed to submit:', await response.text());
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="seller">Seller:</label>
                    <input
                        type="text"
                        id="seller"
                        value={seller}
                        onChange={(e) => setSeller(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="price">Product Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="image">Product Image:</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}




