import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configureStore';
import user from './components/images/user.png';

const app = () => (
  <Provider store={store}>
    <div className="App">
      <div className="top">
        <section className="title">
          <h1>Bookstore CMS</h1>
          <Link className="a active" to="/">BOOKS</Link>
          <Link className="a" to="/Categories">CATEGORIES</Link>
        </section>
        <img src={user} alt="icon" className="icon" />
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
