// App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductContextProvider } from './ProductContext';
import ProductList from './ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <ProductContextProvider value={products}>
      <ProductList />
    </ProductContextProvider>
  );
};

export default App;
