import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Category from "../Category/Category";

const Home = () => {
    const [products, setProducts] = useState();

    const [searchQuery, setSearchQuery] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);


    useEffect(() => {
        fetch('../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);

        const filteredProductList = [...products].filter(p => {
            return p.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setProducts(filteredProductList)
    };


    //category
    useEffect(() => {
        let result = products;

        if (brand) {
            result = [...result].filter(product => product.brand === brand);
        }

        if (category) {
            result = [...result].filter(product => product.category === category);
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            result = [...result].filter(product => product.price >= min && product.price <= max);
        }
        setFilteredProducts(result);
    }, [products])


    const handle = () => {
        console.table(filteredProducts);
        let p = [...filteredProducts];
        setProducts(p);
    }


    return (
        <section className="m-24 border">
            <div>
                <h2 className="text-xl font-serif">Product</h2>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className='p-3 border border-black rounded-lg'
                />
            </div>

            <div>
                {/* <Category /> */}
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
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                                <option value="electronics">electronics</option>
                                <option value="jewelery">jewelery</option>
                            </select>
                        </label>

                        <label>
                            Price Range:
                            <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                                <option value="">All</option>
                                <option value="0-100">0 - 100</option>
                                <option value="101-300">101 - 300</option>
                                <option value="301-2000">301 - 2000</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <button onClick={handle} type="button">Okkk</button>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-4 gap-6 p-10">
                {
                    products?.map(p => <Card key={p.id} p={p} />)
                }
            </div>
        </section>
    );
};

export default Home;