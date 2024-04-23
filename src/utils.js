import { format, add } from 'date-fns';

export const formatPrice = (price) => {
  const str = '' + price;
  if (str.length === 5) {
    return str.slice(0, 2) + ' ' + str.slice(2, 5);
  }
  if (str.length === 6) {
    return str.slice(0, 3) + ' ' + str.slice(3, 6);
  }
  return price;
};

export const formatTime = (date, duration) => {
  const departure = new Date(date);
  const arrival = add(departure, { minutes: duration });

  return `${format(departure, 'HH:mm')} - ${format(arrival, 'HH:mm')}`;
};

export const formatDuration = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours.toString().padStart(2, '0')}ч ${minutes.toString().padStart(2, '0')}м`;
};

export const sortData = (arr, sortOption) => {
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

export const filterData = (arr, filters) => {
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
