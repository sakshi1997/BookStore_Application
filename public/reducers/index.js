import {combineReducers} from 'redux';

import bookReducers from './reducer_books'

import ActiveBook from './reducer_active_book'

const rootReducer=combineReducers({
    books:bookReducers,
    activeBook:ActiveBook
})

export default rootReducer;