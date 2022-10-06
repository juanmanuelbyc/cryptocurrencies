import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, filterCryptos } from '../redux/cryptos/cryptos';
import { updateFilterStatus, updateFilterText } from '../redux/filter/filter';

const Filter = () => {
  const dispatch = useDispatch();

  const { filterStatus, filterText } = useSelector((state) => state.filterReducer);
  const resultsText = `Showing results matching: ' ${filterText} '      →`;

  const handleFilter = (e) => {
    e.preventDefault();
    if (e.target.previousSibling.value) {
      const filterText = e.target.previousSibling.value;
      dispatch(filterCryptos(filterText));
      dispatch(updateFilterStatus(1));
    }
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    dispatch(updateFilterText(e.target.value));
  };

  const resetFilter = () => {
    dispatch(fetchData());
    dispatch(updateFilterStatus(0));
    dispatch(updateFilterText(''));
  };

  if (!filterStatus) {
    return (
      <div className="filterContainer">
        <span>Filter by Name ➤ </span>
        <input className="nameInput" onChange={handleTextChange} name="name" placeholder="Letter or string to match" value={filterText} required />
        <button className="searchButton button" type="button" onClick={handleFilter}>Search!</button>
      </div>
    );
  }

  return (
    <div className="filterContainer">
      <span>{resultsText}</span>
      <button className="resetButton button" type="button" onClick={resetFilter}>Reset filter!</button>
      <span>←</span>
    </div>
  );
};

export default Filter;
