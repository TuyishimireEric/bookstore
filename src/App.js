import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configureStore';

const app = () => (
  <Provider store={store}>
    <div className="App">
      <div className="top">
        <h1 className="title">Bookstore CMS</h1>
        <nav className="nav">
          <Link className="a" to="/">Books</Link>
          <Link className="a" to="/Categories">Categories</Link>
        </nav>
      </div>
      <section className="section">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </section>
    </div>
  </Provider>
);

export default app;
