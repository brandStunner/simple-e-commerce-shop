import React from 'react'

const Basket = (props) => {
    const {cartItems, onAdd, onRemove } = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0) 
    const taxPrice = itemsPrice * .12;
    const shippingPrice = itemsPrice > 2500 ? 0 : itemsPrice * 0.1;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return ( 
        <aside className='block col1'>
            <h2>Cart Items </h2>
            <div >
                {cartItems.length === 0 && <div>Cart is empty</div>}
            </div>
            {cartItems.map( (item) => (
                <div key={item.id} className='row'>
                    <div className='col2'>{item.name}</div>
                    <div className='col2'>
                        <button onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='remove'>-</button>
                    </div>
                    <div className='col2 text-right' >{item.qty} * ${item.price.toFixed(2)} </div>
                </div>
            ))}
            <>
             <hr></hr>
             <div className='row'>
                 <div className='col2'>Items Price</div>
                 <div className='col1 text-right'>${itemsPrice.toFixed(2)}</div>
             </div>
             <div className='row'>
                 <div className='col2'>Tax</div>
                 <div className='col1 text-right'>${taxPrice.toFixed(2)}</div>
             </div>
             <div className='row'>
                 <div className='col2'>Shipping Fee</div>
                 <div className='col1 text-right'>${shippingPrice.toFixed(2)}</div>
             </div>
             <div className='row'>
                 <div className='col2'><strong>Total Cost</strong> </div>
                 <div className='col1 text-right'><strong>${totalPrice.toFixed(2)}</strong> </div>
             </div>
            <hr></hr>
             <div className='row'>
                 <button onClick={()=>alert('Want to Checkout?')}>Checkout</button>
             </div>
            </>
        </aside>
    )
}

export default Basket
