import React from 'react';
import './Logo.scss';

import logoImg from './Logo.svg';

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="logo" />
    </div>
  );
}

export default Logo;
