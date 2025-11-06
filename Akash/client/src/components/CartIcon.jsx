




import React, { useEffect, useState } from 'react';
import CartModal from './CartModal';

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

export default function CartIcon() {
  const [count, setCount] = useState(loadCart().reduce((s, i) => s + i.quantity, 0));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onUpdate() {
      const cart = loadCart();
      setCount(cart.reduce((s, i) => s + i.quantity, 0));
    }
    window.addEventListener('cartUpdated', onUpdate);
    return () => window.removeEventListener('cartUpdated', onUpdate);
  }, []);

  return (
    <>
      <div className="cart-icon-component" onClick={() => setOpen(true)}>
        🛒 <span className="cart-count">{count}</span>
      </div>
      {open && <CartModal onClose={() => setOpen(false)} />}
    </>
  );
}

