import { useState, useEffect } from "react";
import Panel from "../component/Panel.jsx";
import imgCart from "../img/Shop.png";
import Subscribe from "../component/Subscribe.jsx";
import "../css/Cart.css";
import { Link } from "react-router-dom";
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(
          `http://localhost/ShopManager/BE/Controller/C_Cart.php?user_id=1`
        );
        const data = await res.json();
        console.log("Cart data:", data);

        if (data && data.items) {
          setCartItems(data.items);
        } else {
          setCartItems([]);
        }
      } catch (err) {
        console.error("Error loading cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Tính tổng tiền
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.subtotal || 0),
    0
  );

  const handleDelete = async (id) => {
  try {
    const res = await fetch(
      `http://localhost/ShopManager/BE/Controller/C_Cart.php?item_id=${id}`,
      { method: "DELETE" }
    );
    const data = await res.json();

    if (data.success) {
      setCartItems((prev) => prev.filter((item) => item.item_id !== id));
    } else {
      alert("Failed to delete item: " + data.message);
    }
  } catch (err) {
    console.error("Error deleting item:", err);
  }
};

  if (loading) return <p>Loading cart...</p>;

  return (
    <section className="section_cart">
      <Panel namelink="Cart" imglink={imgCart} />

      <div className="container_cart">
        <div className="cart_info">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.item_id}>
                    <td data-label="Product">
                      <span>{item.ProName}</span>
                    </td>
                    <td data-label="Price">
                      {parseFloat(item.price).toLocaleString()}đ
                    </td>
                    <td data-label="Quantity">
                      <p>{item.quantity}</p>
                    </td>
                    <td data-label="Subtotal">
                      {parseFloat(item.subtotal).toLocaleString()}
                    </td>
                    <td data-label="">
                      <span
                        className="delete_icon"
                        onClick={() => handleDelete(item.item_id)}
                      >
                        🗑️
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="cart_total">
          <h2>Cart Total</h2>
          <div className="total_item">
            <span>Total:</span>
            <span>{total.toLocaleString()}</span>
          </div>
          <Link to ="/checkout">
          <button>Check Out</button>
          </Link>
        </div>
      </div>

      <Subscribe />
    </section>
  );
}
