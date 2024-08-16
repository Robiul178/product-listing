import { useState, useEffect } from 'react';

// Sample product list
// const products = [
//     { id: 1, name: 'Laptop', brand: 'Apple', category: 'Electronics', price: 1500 },
//     { id: 2, name: 'Smartphone', brand: 'Samsung', category: 'Electronics', price: 900 },
//     { id: 3, name: 'Tablet', brand: 'Apple', category: 'Electronics', price: 800 },
//     { id: 4, name: 'Headphones', brand: 'Sony', category: 'Accessories', price: 200 },
//     { id: 5, name: 'Smartwatch', brand: 'Apple', category: 'Wearables', price: 400 }
// ];

function Category() {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    console.table(products);


    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let result = products;

        if (brand) {
            result = result.filter(product => product.brand === brand);
        }

        if (category) {
            result = result.filter(product => product.category === category);
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            result = result.filter(product => product.price >= min && product.price <= max);
        }

        setFilteredProducts(result);
    }, [products]);

    return (
        <div>
            <div className='border m-6'>
                <label>
                    Brand:
                    <select value={brand} onChange={e => setBrand(e.target.value)}>
                        <option value="">All</option>
                        <option value="Dorjibari">Dorjibari</option>
                        <option value="Mens World">Mens World</option>
                        <option value="Gold & Silver">Gold & Silver</option>
                        <option value="Tech Studio">Tech Studio</option>
                        <option value="Tech World">Tech World</option>
                        <option value="Easy">Easy</option>
                        <option value="Art">Art</option>
                    </select>
                </label>

                <label>
                    Category:
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Wearables">Wearables</option>
                    </select>
                </label>

                <label>
                    Price Range:
                    <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                        <option value="">All</option>
                        <option value="0-500">0 - 500</option>
                        <option value="501-1000">501 - 1000</option>
                        <option value="1001-2000">1001 - 2000</option>
                    </select>
                </label>
            </div>

            {/* <ul>
                {filteredProducts.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.brand} - {product.category} - ${product.price}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default Category;
