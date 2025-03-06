import { useState } from "react";
import Pro1 from "./assts/assets/p1.jpg";
import Pro2 from "./assts/assets/p2.png";
import Pro3 from "./assts/assets/p3.png";
import Pro4 from "./assts/assets/p4.jpg";
import Pro5 from "./assts/assets/p5.jpg";
import Pro6 from "./assts/assets/p6.jpg";
import Pro7 from "./assts/assets/p7.jpg";
import Pro8 from "./assts/assets/p8.jpg";
import Pro9 from "./assts/assets/p9.jpg";
import Pro10 from "./assts/assets/p10.jpg";
import Pro11 from "./assts/assets/p11.png";
import Pro12 from "./assts/assets/p12.jpg";
import './Product.css';

const Product = () => {
  const [products] = useState([
    { id: 1, name: "Apple", price: 17000, img: Pro1 },
    { id: 2, name: "Samsung", price: 7500, img: Pro2 },
    { id: 3, name: "OPPO", price: 8000, img: Pro3 },
    { id: 4, name: "Motorola", price: 9500, img: Pro4 },
    { id: 5, name: "VIVO", price: 12000, img: Pro5 },
    { id: 6, name: "Xiaomi", price: 11000, img: Pro6 },
    { id: 7, name: "OnePlus", price: 12000, img: Pro7 },
    { id: 8, name: "OnePlus", price: 12500, img: Pro8 },
    { id: 9, name: "Xiaomi", price: 9500, img: Pro9 },
    { id: 10, name: "Motorola", price: 10500, img: Pro10 },
    { id: 11, name: "OnePlus", price: 13000, img: Pro11 },
    { id: 12, name: "Xiaomi 1", price: 14000, img: Pro12 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);


  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() !== "") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };


  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  const getTotalPrice = () =>
    cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <>
      <h1>Product Page</h1>

     
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
       
      </div>

   
      <div className="display">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
          
            <img
              src={product.img}
              alt={`${product.name} image`}
              className="product-image"
            />
            <h1>Rs {product.price}</h1>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    
      <div className="cart-section">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <p>No Items in Cart</p>
        ) : (
          <ul className="cart-items">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <img
                  src={product.img}
                  alt={`${product.name} in cart`}
                  className="cart-item-image"
                />
                <span>
                  {product.name} - Rs {product.price} x {product.quantity}
                </span>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h1>Total - Rs {getTotalPrice()}</h1>
        <button
          className="confirm-order"
          onClick={() => alert("Your order is successfully submitted")}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
};

export default Product;
