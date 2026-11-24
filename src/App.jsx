import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  if (page === 'home') return <main className="landing"><div className="landing-overlay"><section className="hero-copy"><span className="eyebrow">PARADISE NURSERY</span><h1>Bring nature<br/>closer to home.</h1><p>Curated houseplants for calmer rooms, cleaner air, and greener everyday living.</p><button onClick={() => setPage('products')}>Get Started</button></section><AboutUs/></div></main>;
  return <div className="app-shell"><header className="navbar"><button className="brand" onClick={() => setPage('home')}><span>🌿</span><span><b>Paradise Nursery</b><small>Where Green Meets Serenity</small></span></button><nav><button onClick={() => setPage('home')}>Home</button><button onClick={() => setPage('products')}>Plants</button><button className="cart-button" onClick={() => setPage('cart')} aria-label={`Cart with ${count} items`}>🛒<span>{count}</span></button></nav></header>{page === 'cart' ? <CartItem onContinueShopping={() => setPage('products')}/> : <ProductList/>}</div>;
}
