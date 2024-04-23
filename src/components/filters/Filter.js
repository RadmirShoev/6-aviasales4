import React from 'react';
import { connect } from 'react-redux';
import './Filter.scss';

import * as actions from '../../actions/actionFilters';

function Filter({ filters, setAll, toggle }) {
  return (
    <aside className="filter">
      <h2 className="filter__title">Количество пересадок</h2>

      <label className="filter__label">
        <input type="checkbox" checked={filters.all} onChange={() => setAll()} className="filter__checkbox"></input>
        <span className="new-checkbox"></span>
        <span className="checkbox-text">Все</span>
      </label>

      <label className="filter__label">
        <input
          type="checkbox"
          checked={filters.none}
          onChange={() => toggle('none')}
          className="filter__checkbox"
        ></input>
        <span className="new-checkbox"></span>
        <span className="checkbox-text">Без пересадок</span>
      </label>

      <label className="filter__label">
        <input
          type="checkbox"
          checked={filters.one}
          onChange={() => toggle('one')}
          className="filter__checkbox"
        ></input>
        <span className="new-checkbox"></span>
        <span className="checkbox-text">1 пересадка</span>
      </label>

      <label className="filter__label">
        <input
          type="checkbox"
          checked={filters.two}
          onChange={() => toggle('two')}
          className="filter__checkbox"
        ></input>
        <span className="new-checkbox"></span>
        <span className="checkbox-text">2 пересадки</span>
      </label>

      <label className="filter__label">
        <input
          type="checkbox"
          checked={filters.three}
          onChange={() => toggle('three')}
          className="filter__checkbox"
        ></input>
        <span className="new-checkbox"></span>
        <span className="checkbox-text">3 пересадки</span>
      </label>
    </aside>
  );
}

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps, actions)(Filter);
