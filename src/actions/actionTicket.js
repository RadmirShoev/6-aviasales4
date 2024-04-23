export function fetchStart() {
  return {
    type: 'FETCH_START',
  };
}

export function fetchSuccess(data) {
  return {
    type: 'FETCH_SUCCESS',
    data,
  };
}

export function fetchError(error) {
  return {
    type: 'FETCH_ERROR',
    error,
  };
}

export function addMoreTickets(num) {
  return {
    type: 'ADD_MORE_TICKETS',
    num,
  };
}

export function fetchTickets() {
  return async (dispatch) => {
    dispatch(fetchStart());
    const ticketsArr = [];
    let stop = false;
    let response;
    const idResponse = await fetch('https://aviasales-test-api.kata.academy/search');
    const idData = await idResponse.json();

    const searchId = idData.searchId;

    try {
      response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      const data = await response.json();
      stop = data.stop;

      ticketsArr.push(...data.tickets);
      dispatch(fetchSuccess(ticketsArr));
    } catch (error) {
      dispatch(fetchError(error));
    }

    while (!stop) {
      response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      if (response.ok) {
        const data = await response.json();
        stop = data.stop;

        ticketsArr.push(...data.tickets);
      }
    }
    dispatch(fetchSuccess(ticketsArr));
  };
}
