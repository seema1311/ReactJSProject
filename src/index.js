import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'

console.log("index-file")
const sagaMiddleware=createSagaMiddleware()
const store=createStore(rootReducer,undefined,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));