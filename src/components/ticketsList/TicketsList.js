import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spin, Alert } from 'antd';

import { sortData, filterData } from '../../utils';
import { fetchTickets, addMoreTickets } from '../../actions/actionTicket';
import Ticket from '../ticket/Ticket';

function TicketsList() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.tickets.isFetching);
  const isError = useSelector((state) => state.tickets.error);
  const data = useSelector((state) => state.tickets.data);
  const ticketsNum = useSelector((state) => state.tickets.ticketsNum);
  const sortOption = useSelector((state) => state.sorts.sortOption);
  const messageNotFind = 'Рейсов, подходящих под заданные фильтры, не найдено';
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  let ticketsArr;
  const finaleTickets = sortData(filterData(data, filters), sortOption).slice(0, ticketsNum);

  if (!finaleTickets.length) {
    ticketsArr = <Alert message={messageNotFind} type="info" style={{ marginBottom: 15 }} />;
  } else {
    ticketsArr = finaleTickets.map((elem) => {
      return <Ticket key={elem.carrier + elem.prise + elem.segments[0].date} data={elem} />;
    });
  }

  let errorAlert = null;
  if (isError) {
    errorAlert = <Alert message="Ошибка загрузки билетов" type="error" style={{ marginBottom: 10 }} />;
    ticketsArr = null;
  }

  return (
    <div className="list-container">
      {errorAlert}
      <Spin tip="Loading" size="large" spinning={isFetching}>
        <div className="content" />
      </Spin>
      {ticketsArr}
      <Button
        className="tickets__button"
        style={{ backgroundColor: '#2196F3', color: '#fff' }}
        block
        onClick={() => {
          dispatch(addMoreTickets(5));
        }}
      >
        Покажи ещё 5 билетов!
      </Button>
    </div>
  );
}

export default TicketsList;
