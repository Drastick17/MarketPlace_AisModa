import React from 'react'
import Categories from "./Categories";
import Header from "./Header";
import ProductList from "./ProductList";

const HomePage = () => {
    return (
        <>
            <Header />
            <Categories />
            <ProductList />
        </>
    )
}

export default HomePage