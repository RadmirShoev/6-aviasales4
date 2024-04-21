import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import './Filter.scss';

import * as actions from '../../actions/actionFilters';

function Filter({ filters, setAll, toggle }) {
  return (
    <div className="filter">
      <h2 className="filter__title">Количество пересадок</h2>
      <label className="filter__label">
        <Checkbox checked={filters.all} onChange={() => setAll()}>
          Все
        </Checkbox>
      </label>
      <label className="filter__label">
        <Checkbox checked={filters.none} onChange={() => toggle('none')}>
          Без пересадок
        </Checkbox>
      </label>
      <label className="filter__label">
        <Checkbox checked={filters.one} onChange={() => toggle('one')}>
          1 пересадка
        </Checkbox>
      </label>
      <label className="filter__label">
        <Checkbox checked={filters.two} onChange={() => toggle('two')}>
          2 пересадки
        </Checkbox>
      </label>
      <label className="filter__label">
        <Checkbox checked={filters.three} onChange={() => toggle('three')}>
          3 пересадки
        </Checkbox>
      </label>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { filters: state.filters };
};

export default connect(mapStateToProps, actions)(Filter);
