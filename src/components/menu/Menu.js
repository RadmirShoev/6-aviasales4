import React from 'react';
import { connect } from 'react-redux';

import './Menu.scss';

import * as actions from '../../actions/actionSort';

function Menu({ sortOption, setLowrate, setOptimal, setFast }) {
  return (
    <ul className="menu">
      <button
        type="button"
        className={`menu__button menu__button--left  ${sortOption === 'low-rate' && 'selected'}`}
        onClick={() => setLowrate()}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        type="button"
        className={`menu__button menu__button--center ${sortOption === 'fast' && 'selected'}`}
        onClick={() => setFast()}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        type="button"
        className={`menu__button menu__button--right ${sortOption === 'optimal' && 'selected'}`}
        onClick={() => setOptimal()}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </ul>
  );
}

const mapStateToProps = (state) => {
  return { sortOption: state.sorts.sortOption };
};

export default connect(mapStateToProps, actions)(Menu);
