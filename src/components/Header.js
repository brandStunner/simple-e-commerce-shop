import React from 'react'

const Header = (props) => {
    const {countCartItems} = props
    return (
        <header className='row block center'>
        <div>
            <a href='#/'>
            <h1>Home Setup</h1>  
            </a>
        </div>
        <div>


            <a href='#/'> Cart{' '}
            {countCartItems ? (
                <button className='badge'>{countCartItems}</button>  
            ): ''}
</a> <a href='#/'>SingIn</a>

           
        </div>

        </header>
    )
}

export default Header
