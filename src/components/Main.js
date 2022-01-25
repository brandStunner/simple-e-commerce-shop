import React from 'react'
import Product from './Product'

const Main = (props) => {
    const {products, onAdd} = props
    return (
        <main className='block col2'>
            <h2>Product</h2>
            <div className='row'>
                {products.map((product) =>(
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ) )}
            </div>
        </main>
    )
}

export default Main

