import React, { useContext } from "react";
import { CartContext } from '../context/CartContext'; // Adjusted import

const Cart = () => {
  const { cart, updateQuantity } = useContext(CartContext);
  
  if (!updateQuantity) {
    console.error("updateQuantity is not defined in CartContext");
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="text-success">Price: {product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                  <div className="d-flex align-items-center mb-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(product.id, product.quantity - 1)} // Decrease quantity
                    >
                      -
                    </button>
                    <span className="mx-3">{product.quantity}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateQuantity(product.id, product.quantity + 1)} // Increase quantity
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
