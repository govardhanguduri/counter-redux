// actions.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'; // Add INCREMENT_ASYNC action type

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
export const incrementAsync = () => ({ type: INCREMENT_ASYNC }); // Action creator for INCREMENT_ASYNC
