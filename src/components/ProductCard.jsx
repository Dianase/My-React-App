import React from "react"
import "./products.css"



function ProductCard({brand, type, name, price}){
  return (
    <div className="product-card">
      <small>{brand} / {type}</small>
      <h3>{name}</h3>
      <div className="product-price">${price}</div>
    </div>
  )
}

export default ProductCard
