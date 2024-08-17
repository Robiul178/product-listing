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
    const [sortType, setSortType] = useState('');


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
    // useEffect(() => {
    //     let result = products;

    //     if (brand) {
    //         result = [...result].filter(product => product?.brand === brand);
    //     }

    //     if (category) {
    //         result = [...result].filter(product => product?.category === category);
    //     }

    //     if (priceRange) {
    //         const [min, max] = priceRange.split('-').map(Number);
    //         result = [...result].filter(product => product?.price >= min && product.price <= max);
    //     }
    //     console.table(result);
    //     // setFilteredProducts(result);
    //     setProducts(result)
    // }, [products])


    const handle = () => {
        let result = products;

        if (brand) {
            result = [...result].filter(product => product?.brand === brand);
        }

        if (category) {
            result = [...result].filter(product => product?.category === category);
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            result = [...result].filter(product => product?.price >= min && product.price <= max);
        }
        setProducts(result)
    }


    const sortByNewDate = () => {
        const sortedProduct = [...products].sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        setProducts(sortedProduct);
    };
    const sortByLowToHigh = () => {
        const sortedProduct = [...products].sort((a, b) => {
            return a.price - b.price;
        });
        setProducts(sortedProduct);
    };
    const sortByHighToLow = () => {
        const sortedProduct = [...products].sort((a, b) => {
            return b.price - a.price;
        });
        setProducts(sortedProduct);
    };


    return (
        <section className="m-24 border">
            <div>
                <h2 className="text-xl font-serif">Product</h2>
            </div>

            <main >

                <div className="flex">
                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder="Search by product name..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                className='p-2 border border-black rounded-lg'
                            />
                        </div>
                    </div>
                    <div className="mt-2 ms-2">
                        <label className="border p-2 mr-2">
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

                        <label className="p-2 border mr-2">
                            Category:
                            <select value={category} onChange={e => setCategory(e.target.value)}>
                                <option value="">All</option>
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                                <option value="electronics">electronics</option>
                                <option value="jewelery">jewelery</option>
                            </select>
                        </label>

                        <label className="p-2 border mr-2">
                            Price Range:
                            <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                                <option value="">All</option>
                                <option value="0-100">0 - 100</option>
                                <option value="101-300">101 - 300</option>
                                <option value="301-2000">301 - 2000</option>
                            </select>
                        </label>

                        <label className="p-2 border">
                            <button className="btn-outline" onClick={handle}>All OK</button>
                        </label>

                    </div>
                    <div className=''>
                        <button className='btn btn-outline'
                            onClick={sortByNewDate}
                        >Sort by Newest Date</button> <br />
                        <button className='btn  btn-outline'
                            onClick={sortByLowToHigh}
                        >Sort by Low To High</button> <br />
                        <button className='btn btn-outline'
                            onClick={sortByHighToLow}
                        >Sort by High To Low</button>
                    </div>
                </div>
            </main>

            <div className="grid grid-cols-4 gap-6 p-10">
                {
                    products?.map(p => <Card key={p.id} p={p} />)
                }
            </div>
        </section>
    );
};

export default Home;