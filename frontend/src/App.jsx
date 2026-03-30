import { useEffect, useMemo, useState } from 'react';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not connect to backend. Is Spring Boot running on port 8080?');
        setLoading(false);
      });
  }, []);

  const cartCount = cart.length;
  const cartTotal = useMemo(
    () => cart.reduce((sum, product) => sum + product.price, 0),
    [cart]
  );

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Simple E-commerce Store</h1>
        <div className="cart-summary">
          <span>Items: {cartCount}</span>
          <strong>Total: {formatCurrency(cartTotal)}</strong>
        </div>
      </header>

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      <main className="grid">
        {products.map((product) => (
          <article key={product.id} className="card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{formatCurrency(product.price)}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
