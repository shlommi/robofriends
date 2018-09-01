import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

//initial state for fetch robots
const initalStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}


// create reducer for fetchh robots
export const requestRobots = (state = initalStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, { robots: action.payload })
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false })
    default: return state
  }
}

//initial state for search
const initalStateSearch = {
  searchField: ''
}

// create reducer for search robots
export const searchRobots = (state = initalStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    default:
      return state;
  }
}