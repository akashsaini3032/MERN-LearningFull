import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.dispatchEvent(new Event('cartUpdated'));
}

export default function CartModal({ onClose }) {
  const [cart, setCart] = useState(loadCart());
  const navigate = useNavigate();

  function changeQty(productId, delta) {
    const newCart = cart.map(i => i.productId === productId ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i);
    setCart(newCart);
    saveCart(newCart);
  }

  function removeItem(productId) {
    const newCart = cart.filter(i => i.productId !== productId);
    setCart(newCart);
    saveCart(newCart);
  }

  function goToCheckout() {
    onClose();
    navigate('/checkout');
  }

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Your Cart</h3>
        <div>
          {cart.length === 0 && <p>Cart is empty</p>}
          {cart.map(i => (
            <div key={i.productId} className="cart-row">
              <div>
                <strong>{i.title}</strong>
                <div>${(i.price / 100).toFixed(2)}</div>
              </div>
              <div>
                <button onClick={() => changeQty(i.productId, -1)}>-</button>
                <span>{i.quantity}</span>
                <button onClick={() => changeQty(i.productId, +1)}>+</button>
                <button onClick={() => removeItem(i.productId)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <div>Total: <strong>${(total / 100).toFixed(2)}</strong></div>
          <div>
            <button onClick={onClose}>Continue shopping</button>
            <button onClick={goToCheckout} disabled={cart.length === 0}>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

