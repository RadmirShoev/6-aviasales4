import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Spin, Alert } from 'antd';

import { fetchTickets, addMoreTickets } from '../../actions/actionTicket';
import Ticket from '../ticket/Ticket';

function TicketsList() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.tickets.isFetching);
  const isError = useSelector((state) => state.tickets.error);
  const data = useSelector((state) => state.tickets.data);
  const ticketsNum = useSelector((state) => state.tickets.ticketsNum);
  const filters = useSelector((state) => state.filters);
  const sortOption = useSelector((state) => state.sorts.sortOption);
  const messageNotFind = 'Рейсов, подходящих под заданные фильтры, не найдено';

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  const sortData = (arr) => {
    switch (sortOption) {
      case 'low-rate': {
        return [...arr].sort((arr1, arr2) => arr1.price - arr2.price);
      }
      case 'optimal': {
        return [...arr].sort((arr1, arr2) => {
          if (arr1.carrier > arr2.carrier && arr1.carrier === 'FV') {
            return 1;
          }
          if (arr1.carrier < arr2.carrier && arr1.carrier === 'FV') {
            return -1;
          }
          return 0;
        });
      }
      case 'fast': {
        return [...arr].sort((arr1, arr2) => arr1.segments[0].duration - arr2.segments[0].duration);
      }
      default:
        return arr;
    }
  };

  const filterData = (arr) => {
    if (filters.all) {
      return arr;
    }
    return arr.filter((ticket) => {
      if (filters.none && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) {
        return true;
      }
      if (filters.one && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) {
        return true;
      }
      if (filters.two && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) {
        return true;
      }
      if (filters.three && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) {
        return true;
      }
      return false;
    });
  };

  let ticketsArr;
  const finaleTickets = sortData(filterData(data)).slice(0, ticketsNum);

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
