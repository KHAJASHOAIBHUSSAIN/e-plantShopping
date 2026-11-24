import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

export const plantsArray = [
  { category:'Air Purifying Plants', name:'Snake Plant', cost:'$15', image:'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&w=600&q=80', description:'Produces oxygen at night and improves indoor air quality.' },
  { category:'Air Purifying Plants', name:'Spider Plant', cost:'$12', image:'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80', description:'Filters common household pollutants and is easy to grow.' },
  { category:'Air Purifying Plants', name:'Peace Lily', cost:'$18', image:'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80', description:'A graceful flowering plant that helps freshen indoor air.' },
  { category:'Aromatic Plants', name:'Lavender', cost:'$14', image:'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80', description:'Calming fragrance with beautiful purple blooms.' },
  { category:'Aromatic Plants', name:'Rosemary', cost:'$10', image:'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=600&q=80', description:'A fragrant herb ideal for sunny windows and cooking.' },
  { category:'Aromatic Plants', name:'Mint', cost:'$8', image:'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=600&q=80', description:'Refreshing aroma and fast-growing leaves for beverages.' },
  { category:'Medicinal Plants', name:'Aloe Vera', cost:'$11', image:'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80', description:'A hardy succulent traditionally used for soothing skin.' },
  { category:'Medicinal Plants', name:'Tulsi', cost:'$9', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5di7ADg6pJX2PU3PAF0TkEZAk5ikWFyhCJVuQIOAUA&s=10', description:'Sacred basil with aromatic leaves and traditional uses.' },
  { category:'Medicinal Plants', name:'Chamomile', cost:'$13', image:'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=600&q=80', description:'Delicate flowers renowned for their gentle, calming aroma.' },
  { category:'Low Maintenance Plants', name:'ZZ Plant', cost:'$20', image:'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80', description:'Glossy foliage that tolerates low light and infrequent watering.' },
  { category:'Low Maintenance Plants', name:'Pothos', cost:'$12', image:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80', description:'A trailing favorite that adapts well to many indoor spaces.' },
  { category:'Low Maintenance Plants', name:'Jade Plant', cost:'$16', image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80', description:'A compact succulent with thick leaves and simple care needs.' }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categories = [...new Set(plantsArray.map((p) => p.category))];
  const inCart = (name) => cartItems.some((item) => item.name === name);
  return <main className="products-page">
    <div className="page-heading"><p>Find the perfect plant for your space</p><h1>Our Plant Collection</h1></div>
    {categories.map((category) => <section className="category" key={category}>
      <h2>{category}</h2>
      <div className="product-grid">
        {plantsArray.filter((plant) => plant.category === category).map((plant) => {
          const added = inCart(plant.name);
          return <article className="product-card" key={plant.name}>
            <span className="sale-badge">SALE</span>
            <img src={plant.image} alt={plant.name} loading="lazy"/>
            <div className="product-content"><h3>{plant.name}</h3><div className="price">{plant.cost}</div><p>{plant.description}</p>
              <button disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? 'Added to Cart' : 'Add to Cart'}</button>
            </div>
          </article>;
        })}
      </div>
    </section>)}
  </main>;
}
