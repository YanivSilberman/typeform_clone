import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import formReducers from './form_reducers'
import pageReducers from './page_reducers'

export default combineReducers({
  routing: routerReducer,
  form: formReducers,
  page: pageReducers,
})
