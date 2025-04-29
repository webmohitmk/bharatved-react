import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from '../context/CartContext'; // Adjusted import

const products = [
  { id: 1, name: 'Agetame', description: 'Description for Agetame', price: '$20', oldPrice: '$30', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 2, name: 'Atherotame', description: 'Description for Atherotame', price: '$25', oldPrice: '$35', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 3, name: 'Cardiovedic', description: 'Description for Cardiovedic', price: '$18', oldPrice: '$28', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 4, name: 'Diabetame', description: 'Description for Diabetame', price: '$22', oldPrice: '$32', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 5, name: 'Hepatovedic', description: 'Description for Hepatovedic', price: '$27', oldPrice: '$37', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 6, name: 'Hormovedic', description: 'Description for Hormovedic', price: '$19', oldPrice: '$29', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 7, name: 'Immunovedic', description: 'Description for Immunovedic', price: '$23', oldPrice: '$33', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 8, name: 'Neurovedic', description: 'Description for Neurovedic', price: '$21', oldPrice: '$31', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 9, name: 'Nephrovedic', description: 'Description for Nephrovedic', price: '$26', oldPrice: '$36', image: 'https://bharatved.com/public/images/1735648321.png' },
  { id: 10, name: 'Orthovedic', description: 'Description for Orthovedic', price: '$24', oldPrice: '$34', image: 'https://bharatved.com/public/images/1735648321.png' },

 
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card p-3 text-center">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-success">Price: {product.price}</p>
                <p className="text-muted text-decoration-line-through">
                  {product.oldPrice}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-secondary w-100"
                >
                  Product Details
                </Link>
                <button
                  className="btn btn-primary w-100 mt-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <a href="#" className="btn btn-warning w-100 mt-2">
                  Buy from Amazon
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
