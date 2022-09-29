import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
  return (
    <div className="mainContainer container">
      <div className="row">
        <header className="col-md-12 fixed-header">
          <h1>Shopping Cart</h1>
        </header>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>

      <footer>
        <small>
          made by <a href="">Mohini Howal</a>, source code available on{' '}
          <a href="https://github.com/MohiniHowal/shopping-cart">github</a>
        </small>
      </footer>
    </div>
  );
};

export default App;
