export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_CART":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        cart: [action.payload, ...state.cart],
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        cart: state.cart.filter((movie) => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
