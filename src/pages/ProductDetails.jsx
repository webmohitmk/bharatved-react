import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from "../context/CartContext"; // Adjusted import

const products = [
  {
    id: 1,
    name: "Agetame",
    description: "Description for Agetame",
    price: "$20",
    oldPrice: "$30",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 2,
    name: "Atherotame",
    description: "Description for Atherotame",
    price: "$25",
    oldPrice: "$35",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 3,
    name: "Cardiovedic",
    description: "Description for Cardiovedic",
    price: "$18",
    oldPrice: "$28",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 4,
    name: "Diabetame",
    description: "Description for Diabetame",
    price: "$22",
    oldPrice: "$32",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 5,
    name: "Hepatovedic",
    description: "Description for Hepatovedic",
    price: "$27",
    oldPrice: "$37",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 6,
    name: "Hormovedic",
    description: "Description for Hormovedic",
    price: "$19",
    oldPrice: "$29",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 7,
    name: "Immunovedic",
    description: "Description for Immunovedic",
    price: "$23",
    oldPrice: "$33",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 8,
    name: "Neurovedic",
    description: "Description for Neurovedic",
    price: "$21",
    oldPrice: "$31",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 9,
    name: "Nephrovedic",
    description: "Description for Nephrovedic",
    price: "$26",
    oldPrice: "$36",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
  {
    id: 10,
    name: "Orthovedic",
    description: "Description for Orthovedic",
    price: "$24",
    oldPrice: "$34",
    image: "https://bharatved.com/public/images/1735648321.png",
  },

  {
    id: 11,
    name: "Sarfaraz",
    description: "Description for Orthovedic",
    price: "$88",
    oldPrice: "$34",
    image: "https://bharatved.com/public/images/1735648321.png",
  },
];

const ProductDetails = () => {
  
  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext); // Use CartContext


  const product = products.find((p) => p.id === parseInt(id));


  const [quantity, setQuantity] = useState(1);

  const [pincode, setPincode] = useState("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Add product with quantity to cart
    alert(`${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-success">Price: {product.price}</p>
          <p className="text-muted text-decoration-line-through">
            {product.oldPrice}
          </p>
          <div className="d-flex align-items-center mb-3">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="mx-3">{quantity}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary w-100 mb-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button className="btn btn-warning w-100" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
