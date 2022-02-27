import React from 'react'
import Categories from "./Categories";
import Header from "./Header";
import ProductList from "./ProductList";

const HomePage = () => {
    return (
        <div>

            <Header />
            <Categories />
            <ProductList />
        </div>
    )
}

export default HomePage