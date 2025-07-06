import React, { useState } from "react";
import "./Store.css";

const Store = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      title: "Mastering React",
      price: 499,
      image: "https://m.media-amazon.com/images/I/61NwnZfAHEL._SY466_.jpg",
    },
    {
      id: 2,
      title: "AWS Notes PDF",
      price: 199,
      image: "https://cdn.kobo.com/book-images/34b7d44e-f22b-4e26-a943-cd790b1737e3/353/569/90/False/aws-certified-cloud-practitioner-study-guide-1.jpg",
    },
    {
      id: 3,
      title: "Frontend Interview Kit",
      price: 299,
      image: "https://m.media-amazon.com/images/I/71uAI28kJuL._SY466_.jpg",
    },
    {
      id: 4,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
    {
      id: 5,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
    {
      id: 6,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
    {
      id: 7,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
    {
      id: 8,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
    {
      id: 9,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
    {
      id: 10,
      title: "DevOps Essentials Book",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61TSuTJXZ6L._SY466_.jpg",
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  };

  return (
    <div className="store-wrapper">
      <h1 className="store-title">🛍️ Student Resource Store</h1>

      <div className="store-content">
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart-panel">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div className="cart-item">
                    <span>{item.title} x {item.qty}</span>
                    <span>₹{item.qty * item.price}</span>
                    <button onClick={() => removeFromCart(item.id)}>
                      ❌
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="cart-total">
            <strong>Total: ₹{getTotal()}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
