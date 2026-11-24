import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

export default function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const number = (cost) => parseFloat(cost.substring(1));
  const total = items.reduce((sum, item) => sum + number(item.cost) * item.quantity, 0);
  const increment = (item) => dispatch(updateQuantity({ name:item.name, quantity:item.quantity + 1 }));
  const decrement = (item) => item.quantity > 1 ? dispatch(updateQuantity({ name:item.name, quantity:item.quantity - 1 })) : dispatch(removeItem(item.name));
  return <main className="cart-page">
    <div className="cart-title"><p>Your selected greenery</p><h1>Shopping Cart</h1></div>
    <section className="cart-shell">
      <div className="cart-summary"><span>Total Cart Amount</span><strong>${total.toFixed(2)}</strong></div>
      {items.length === 0 ? <div className="empty-cart"><div>🪴</div><h2>Your cart is empty</h2><p>Add a plant to start growing your indoor garden.</p></div> :
        <div className="cart-list">{items.map((item) => <article className="cart-card" key={item.name}>
          <img src={item.image} alt={item.name}/><div className="cart-info"><h2>{item.name}</h2><p className="unit-price">Unit price: {item.cost}</p>
            <div className="quantity"><button aria-label={`Decrease ${item.name}`} onClick={() => decrement(item)}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.name}`} onClick={() => increment(item)}>+</button></div>
            <strong>Subtotal: ${(number(item.cost) * item.quantity).toFixed(2)}</strong>
            <button className="delete" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
          </div></article>)}</div>}
      <div className="cart-actions"><button className="secondary" onClick={onContinueShopping}>Continue Shopping</button><button onClick={() => alert('Coming Soon')}>Checkout</button></div>
    </section>
  </main>;
}
