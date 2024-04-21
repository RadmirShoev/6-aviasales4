import React from 'react';
import { connect } from 'react-redux';

import './Menu.scss';

import * as actions from '../../actions/actionSort';

function Menu({ sortOption, setLowrate, setOptimal, setFast }) {
  return (
    <div className="menu">
      <button
        type="button"
        className={`menu__button ${sortOption === 'low-rate' && 'selected'}`}
        onClick={() => setLowrate()}
      >
        Самый дешевый
      </button>
      <button type="button" className={`menu__button ${sortOption === 'fast' && 'selected'}`} onClick={() => setFast()}>
        Самый быстрый
      </button>
      <button
        type="button"
        className={`menu__button ${sortOption === 'optimal' && 'selected'}`}
        onClick={() => setOptimal()}
      >
        Оптимальный
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { sortOption: state.sorts.sortOption };
};

export default connect(mapStateToProps, actions)(Menu);
