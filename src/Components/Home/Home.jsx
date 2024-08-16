import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
    const [products, setProducts] = useState();

    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        fetch('../../public/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);

        const filteredFoodList = [...products].filter(p => {
            return p.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setProducts(filteredFoodList)
    };


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


            <div className="grid grid-cols-4 gap-6 p-10">
                {
                    products?.map(p => <Card key={p.id} p={p} />)
                }
            </div>
        </section>
    );
};

export default Home;