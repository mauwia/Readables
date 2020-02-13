import React from 'react'
import ReactDom from 'react-dom';
import {Router} from 'react-router-dom'
import App from './Component/App'
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import reducers from './Reducer'
import History from './History'
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const store=createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

ReactDom.render(<Provider store={store}><Router history={History}><App/></Router></Provider>,document.getElementById('root'));