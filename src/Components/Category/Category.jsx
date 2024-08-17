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



    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    console.table(filteredProducts);


    useEffect(() => {
        let result = products;

        if (brand) {
            result = result?.filter(product => product.brand === brand);
        }

        if (category) {
            result = result?.filter(product => product.category === category);
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            result = result?.filter(product => product.price >= min && product.price <= max);
        }
        setFilteredProducts(result);
    }, [products]);

    return (
        <div className="flex">
            <div className="max-w-72 sticky top-0 min-h-screen bg-blue-400 text-black">
                <p>kjasdgllllllllllllllgkjasdgllllllllllllllgwygdWBhwyuldkjasdgllllllllllllllgwygdWBhwyuldkjasdgllllllllllllllgwygdWBhwyuldkjasdgllllllllllllllgwygdWBhwyuldwygdWBhwyuld</p>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores maxime ducimus doloremque suscipit, aut officia reprehenderit numquam perferendis facilis, ad iure omnis corporis sed est possimus et. Nulla, at labore.
                    Adipisci at expedita magnam voluptatibus. Non ipsa natus et minima architecto assumenda illo blanditiis, totam similique enim officiis voluptate itaque nemo doloribus modi debitis sapiente beatae doloremque asperiores? Dolorum, facilis.
                    Labore nihil itaque beatae similique autem molestias ipsum expedita ad corporis, laborum at dolorem fugiat possimus eum illum quo! Sunt dolor aliquid tempora eligendi accusamus est, magni omnis quidem vel.
                    Iste accusantium magnam facilis, enim fugiat quis cumque architecto velit nulla eum nesciunt officiis pariatur magni harum possimus quo fuga labore distinctio. Ipsum architecto amet laudantium eos numquam sint! Aliquam!
                    Aperiam similique tempora dolorem illum optio sunt quod vitae ab culpa magni debitis repellendus fugit dignissimos impedit unde, id maxime quae labore et nulla molestias numquam omnis ducimus beatae. Beatae.
                    Ipsam ea consectetur molestias iusto eius commodi? Reprehenderit consequuntur ad a adipisci. Mollitia tempore rem pariatur? Eaque ullam id reprehenderit eum! Quasi modi iure quod officia enim laudantium veniam facere.
                    Beatae, error numquam. Deleniti ab voluptatibus harum quia. Consequatur, mollitia! Minima nihil quia iure libero aut explicabo corporis fugiat quos! Ut doloremque, repellendus perspiciatis accusantium veniam quos quod qui nemo!
                    Nemo, eaque id. Nisi similique ut amet aut sapiente reiciendis obcaecati labore laboriosam commodi corrupti possimus necessitatibus odio dolore cumque, deleniti non eos repellat! Aliquid praesentium illum numquam suscipit ullam?
                    Consectetur labore autem provident! Cum delectus nesciunt doloribus officia exercitationem minus distinctio quod iusto, architecto temporibus cupiditate tenetur incidunt earum deleniti quaerat doloremque inventore quasi nihil explicabo unde repudiandae fuga.
                    Blanditiis soluta omnis, aut, dicta temporibus culpa tenetur, exercitationem velit nostrum aliquid rem obcaecati? Similique asperiores dolor tenetur, rerum officia maiores unde! Voluptates doloremque aut quia ut officia accusantium labore!
                    Expedita ab illum deserunt mollitia est impedit sed officia. Aliquid corporis doloremque maxime distinctio non nulla ducimus cum ullam possimus, ea accusamus odit officiis itaque debitis ab maiores voluptatum repellat.
                    Veniam natus, odit ut, tempora delectus doloribus doloremque eius, recusandae officiis blanditiis deleniti ullam quas? Reiciendis itaque esse cum? Ab sint voluptate hic id ad commodi cumque adipisci cupiditate quia.
                    Est rem atque autem quam tenetur ex aut, sequi ullam voluptate animi libero laborum sapiente minus consectetur alias modi sed impedit! Aspernatur, illo tenetur! Amet repellat deleniti modi quae sit.
                    Atque reiciendis suscipit eaque libero dicta tempore quae eligendi placeat soluta, at ratione porro voluptates. Temporibus dolores assumenda, rem est maiores incidunt quasi voluptatum accusantium possimus magni, commodi repudiandae aperiam?
                    Sequi, ea? Autem, ut quae labore unde nostrum commodi laboriosam consequuntur quod debitis magni voluptatem quasi ad modi enim dolore, eveniet perspiciatis neque dignissimos architecto cum inventore sapiente est suscipit?
                    Est harum adipisci non saepe, optio, laborum itaque ea sunt molestias error nihil porro at temporibus nam odit. Odit voluptatem eius, iste aperiam eaque id. Eligendi, tenetur animi. Harum, ullam!
                    Accusantium id voluptas aspernatur aut quis iusto, ratione illo, aliquam odio nam rem deserunt labore repudiandae sint magni dolores, sunt cumque. Molestias dignissimos ratione enim porro exercitationem fugit neque aut!
                    Architecto expedita porro voluptates dicta quibusdam maxime inventore sed tempora recusandae molestiae quo doloribus eius sint assumenda, repellat voluptate laudantium ducimus neque asperiores ratione. Optio doloremque molestias quia ab ipsam!
                    Quo et sequi voluptate nesciunt recusandae mollitia velit porro in quisquam aut quasi repellat eaque atque ullam quae voluptates consectetur doloribus saepe, nemo fugiat amet. Quo veritatis saepe corporis accusantium!
                    Voluptatibus asperiores explicabo cumque laboriosam aliquid ex quaerat beatae odio! Qui fuga consequuntur natus hic, itaque eveniet nihil quaerat, vero dolor necessitatibus provident inventore fugit? Repudiandae totam delectus recusandae tempora.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores maxime ducimus doloremque suscipit, aut officia reprehenderit numquam perferendis facilis, ad iure omnis corporis sed est possimus et. Nulla, at labore.
                    Adipisci at expedita magnam voluptatibus. Non ipsa natus et minima architecto assumenda illo blanditiis, totam similique enim officiis voluptate itaque nemo doloribus modi debitis sapiente beatae doloremque asperiores? Dolorum, facilis.
                    Labore nihil itaque beatae similique autem molestias ipsum expedita ad corporis, laborum at dolorem fugiat possimus eum illum quo! Sunt dolor aliquid tempora eligendi accusamus est, magni omnis quidem vel.
                    Iste accusantium magnam facilis, enim fugiat quis cumque architecto velit nulla eum nesciunt officiis pariatur magni harum possimus quo fuga labore distinctio. Ipsum architecto amet laudantium eos numquam sint! Aliquam!
                    Aperiam similique tempora dolorem illum optio sunt quod vitae ab culpa magni debitis repellendus fugit dignissimos impedit unde, id maxime quae labore et nulla molestias numquam omnis ducimus beatae. Beatae.
                    Ipsam ea consectetur molestias iusto eius commodi? Reprehenderit consequuntur ad a adipisci. Mollitia tempore rem pariatur? Eaque ullam id reprehenderit eum! Quasi modi iure quod officia enim laudantium veniam facere.
                    Beatae, error numquam. Deleniti ab voluptatibus harum quia. Consequatur, mollitia! Minima nihil quia iure libero aut explicabo corporis fugiat quos! Ut doloremque, repellendus perspiciatis accusantium veniam quos quod qui nemo!
                    Nemo, eaque id. Nisi similique ut amet aut sapiente reiciendis obcaecati labore laboriosam commodi corrupti possimus necessitatibus odio dolore cumque, deleniti non eos repellat! Aliquid praesentium illum numquam suscipit ullam?
                    Consectetur labore autem provident! Cum delectus nesciunt doloribus officia exercitationem minus distinctio quod iusto, architecto temporibus cupiditate tenetur incidunt earum deleniti quaerat doloremque inventore quasi nihil explicabo unde repudiandae fuga.
                    Blanditiis soluta omnis, aut, dicta temporibus culpa tenetur, exercitationem velit nostrum aliquid rem obcaecati? Similique asperiores dolor tenetur, rerum officia maiores unde! Voluptates doloremque aut quia ut officia accusantium labore!
                    Expedita ab illum deserunt mollitia est impedit sed officia. Aliquid corporis doloremque maxime distinctio non nulla ducimus cum ullam possimus, ea accusamus odit officiis itaque debitis ab maiores voluptatum repellat.
                    Veniam natus, odit ut, tempora delectus doloribus doloremque eius, recusandae officiis blanditiis deleniti ullam quas? Reiciendis itaque esse cum? Ab sint voluptate hic id ad commodi cumque adipisci cupiditate quia.
                    Est rem atque autem quam tenetur ex aut, sequi ullam voluptate animi libero laborum sapiente minus consectetur alias modi sed impedit! Aspernatur, illo tenetur! Amet repellat deleniti modi quae sit.
                    Atque reiciendis suscipit eaque libero dicta tempore quae eligendi placeat soluta, at ratione porro voluptates. Temporibus dolores assumenda, rem est maiores incidunt quasi voluptatum accusantium possimus magni, commodi repudiandae aperiam?
                    Sequi, ea? Autem, ut quae labore unde nostrum commodi laboriosam consequuntur quod debitis magni voluptatem quasi ad modi enim dolore, eveniet perspiciatis neque dignissimos architecto cum inventore sapiente est suscipit?
                    Est harum adipisci non saepe, optio, laborum itaque ea sunt molestias error nihil porro at temporibus nam odit. Odit voluptatem eius, iste aperiam eaque id. Eligendi, tenetur animi. Harum, ullam!
                    Accusantium id voluptas aspernatur aut quis iusto, ratione illo, aliquam odio nam rem deserunt labore repudiandae sint magni dolores, sunt cumque. Molestias dignissimos ratione enim porro exercitationem fugit neque aut!
                    Architecto expedita porro voluptates dicta quibusdam maxime inventore sed tempora recusandae molestiae quo doloribus eius sint assumenda, repellat voluptate laudantium ducimus neque asperiores ratione. Optio doloremque molestias quia ab ipsam!
                    Quo et sequi voluptate nesciunt recusandae mollitia velit porro in quisquam aut quasi repellat eaque atque ullam quae voluptates consectetur doloribus saepe, nemo fugiat amet. Quo veritatis saepe corporis accusantium!
                    Voluptatibus asperiores explicabo cumque laboriosam aliquid ex quaerat beatae odio! Qui fuga consequuntur natus hic, itaque eveniet nihil quaerat, vero dolor necessitatibus provident inventore fugit? Repudiandae totam delectus recusandae tempora.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores maxime ducimus doloremque suscipit, aut officia reprehenderit numquam perferendis facilis, ad iure omnis corporis sed est possimus et. Nulla, at labore.
                    Adipisci at expedita magnam voluptatibus. Non ipsa natus et minima architecto assumenda illo blanditiis, totam similique enim officiis voluptate itaque nemo doloribus modi debitis sapiente beatae doloremque asperiores? Dolorum, facilis.
                    Labore nihil itaque beatae similique autem molestias ipsum expedita ad corporis, laborum at dolorem fugiat possimus eum illum quo! Sunt dolor aliquid tempora eligendi accusamus est, magni omnis quidem vel.
                    Iste accusantium magnam facilis, enim fugiat quis cumque architecto velit nulla eum nesciunt officiis pariatur magni harum possimus quo fuga labore distinctio. Ipsum architecto amet laudantium eos numquam sint! Aliquam!
                    Aperiam similique tempora dolorem illum optio sunt quod vitae ab culpa magni debitis repellendus fugit dignissimos impedit unde, id maxime quae labore et nulla molestias numquam omnis ducimus beatae. Beatae.
                    Ipsam ea consectetur molestias iusto eius commodi? Reprehenderit consequuntur ad a adipisci. Mollitia tempore rem pariatur? Eaque ullam id reprehenderit eum! Quasi modi iure quod officia enim laudantium veniam facere.
                    Beatae, error numquam. Deleniti ab voluptatibus harum quia. Consequatur, mollitia! Minima nihil quia iure libero aut explicabo corporis fugiat quos! Ut doloremque, repellendus perspiciatis accusantium veniam quos quod qui nemo!
                    Nemo, eaque id. Nisi similique ut amet aut sapiente reiciendis obcaecati labore laboriosam commodi corrupti possimus necessitatibus odio dolore cumque, deleniti non eos repellat! Aliquid praesentium illum numquam suscipit ullam?
                    Consectetur labore autem provident! Cum delectus nesciunt doloribus officia exercitationem minus distinctio quod iusto, architecto temporibus cupiditate tenetur incidunt earum deleniti quaerat doloremque inventore quasi nihil explicabo unde repudiandae fuga.
                    Blanditiis soluta omnis, aut, dicta temporibus culpa tenetur, exercitationem velit nostrum aliquid rem obcaecati? Similique asperiores dolor tenetur, rerum officia maiores unde! Voluptates doloremque aut quia ut officia accusantium labore!
                    Expedita ab illum deserunt mollitia est impedit sed officia. Aliquid corporis doloremque maxime distinctio non nulla ducimus cum ullam possimus, ea accusamus odit officiis itaque debitis ab maiores voluptatum repellat.
                    Veniam natus, odit ut, tempora delectus doloribus doloremque eius, recusandae officiis blanditiis deleniti ullam quas? Reiciendis itaque esse cum? Ab sint voluptate hic id ad commodi cumque adipisci cupiditate quia.
                    Est rem atque autem quam tenetur ex aut, sequi ullam voluptate animi libero laborum sapiente minus consectetur alias modi sed impedit! Aspernatur, illo tenetur! Amet repellat deleniti modi quae sit.
                    Atque reiciendis suscipit eaque libero dicta tempore quae eligendi placeat soluta, at ratione porro voluptates. Temporibus dolores assumenda, rem est maiores incidunt quasi voluptatum accusantium possimus magni, commodi repudiandae aperiam?
                    Sequi, ea? Autem, ut quae labore unde nostrum commodi laboriosam consequuntur quod debitis magni voluptatem quasi ad modi enim dolore, eveniet perspiciatis neque dignissimos architecto cum inventore sapiente est suscipit?
                    Est harum adipisci non saepe, optio, laborum itaque ea sunt molestias error nihil porro at temporibus nam odit. Odit voluptatem eius, iste aperiam eaque id. Eligendi, tenetur animi. Harum, ullam!
                    Accusantium id voluptas aspernatur aut quis iusto, ratione illo, aliquam odio nam rem deserunt labore repudiandae sint magni dolores, sunt cumque. Molestias dignissimos ratione enim porro exercitationem fugit neque aut!
                    Architecto expedita porro voluptates dicta quibusdam maxime inventore sed tempora recusandae molestiae quo doloribus eius sint assumenda, repellat voluptate laudantium ducimus neque asperiores ratione. Optio doloremque molestias quia ab ipsam!
                    Quo et sequi voluptate nesciunt recusandae mollitia velit porro in quisquam aut quasi repellat eaque atque ullam quae voluptates consectetur doloribus saepe, nemo fugiat amet. Quo veritatis saepe corporis accusantium!
                    Voluptatibus asperiores explicabo cumque laboriosam aliquid ex quaerat beatae odio! Qui fuga consequuntur natus hic, itaque eveniet nihil quaerat, vero dolor necessitatibus provident inventore fugit? Repudiandae totam delectus recusandae tempora.

                </p>
            </div>
        </div>
    );
}

export default Category;
