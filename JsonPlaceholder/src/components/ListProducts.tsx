//@ts-ignore
import { useState, useEffect } from 'react';
import { getProducts } from '../api/api';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await getProducts(); 
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products: ', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 && <p>No products available.</p>}
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
        >
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;