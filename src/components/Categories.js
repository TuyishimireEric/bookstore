import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.checkStatus);
  const viewStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categories-container">
      <h1>{category}</h1>
      <button type="button" className="categories-btn" onClick={viewStatus}>Check status</button>
    </div>
  );
}

export default Categories;
