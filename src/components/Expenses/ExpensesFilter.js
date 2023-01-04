import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filterChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value='2023'>2024</option>
          <option value='2022'>2023</option>
          <option value='2021'>2022</option>
          <option value='2020'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
