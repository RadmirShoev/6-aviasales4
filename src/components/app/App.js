import React from 'react';
import './App.scss';

import Logo from '../logo/Logo';
import Filter from '../filters/Filter';
import Menu from '../menu/Menu';
import TicketsList from '../ticketsList/TicketsList';

function App() {
  return (
    <div className="container">
      <Logo className="logo" />
      <Filter className="filter" />
      <main className="main">
        <Menu />
        <TicketsList />
      </main>
    </div>
  );
}

export default App;
