export function setAll() {
  return {
    type: 'SET_ALL',
  };
}

export function toggle(filter) {
  return {
    type: 'TOGGLE',
    value: filter,
  };
}
