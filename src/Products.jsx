import React from 'react'
import Data from "./Products.json";


export default function Products({addToCart}){

    return (
        <>
        <h1>Produtos</h1>
          <div className="products">
            { Data.map(product => {
              return(
                <div className="product" key={product.id}>
                  <img src={product.image} alt="product-img" />
                  <div className="product-description">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>addToCart(product)}>Adicionar</button>
                  </div>
                </div>
              )
            })}
          </div>
          </>
    )
}