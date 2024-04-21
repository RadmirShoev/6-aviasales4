import React from 'react';
import './App.scss';

import Logo from '../logo/Logo';
import Filter from '../filters/Filter';
import Menu from '../menu/Menu';
import TicketsList from '../ticketsList/TicketsList';

function App() {
  return (
    <div className="container">
      <Logo />
      <Filter />
      <div className="main__content">
        <Menu />
        <TicketsList />
      </div>
    </div>
  );
}

export default App;
