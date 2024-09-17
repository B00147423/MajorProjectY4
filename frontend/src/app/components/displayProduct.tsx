//django-frontend\src\app\components\displayProduct.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
interface Product {
    product_name?: string;
    description?: string;
    seller?: string;
    image?: string;
}

const DisplayProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/product/products/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError('Failed to fetch product data');
                console.error(err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>; // Render loading state on the client
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (products.length === 0) {
        return <div>No products available.</div>; // Handle empty product case
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (products.length === 0) {
        return <div>Loading products...</div>;
    }

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>
                    <h1>{product.product_name || 'No name available'}</h1>
                    <p>{product.description || 'No description available'}</p>
                    <p>Seller: {product.seller || 'No seller information'}</p>
                    {product.image ? (
                        <Image
                            src={`http://127.0.0.1:8000${product.image}`}
                            alt={product.product_name || 'Product image'}
                            style={{ width: '200px', height: '200px' }}
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DisplayProduct;
