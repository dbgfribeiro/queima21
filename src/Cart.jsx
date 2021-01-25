import React from 'react'



export default function Cart({cart, removeFromCart}){

    return (
        <>
        <h1>Carrinho</h1>
          <div className="cart-products">
            { cart.map((product , idx) => {
              return(
                <div className="cart-product" key={idx}>
                  <img src={product.image} alt="product-img" />
                  <div className="cart-product-description">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>removeFromCart(product)}>Remove</button>
                  </div>
                </div>
              )
            })}
          </div>
          </>
    )
}