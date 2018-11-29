import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import history from './store/history';
import { Switch, Route } from 'react-router-dom';
import { connectRouter, ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './store/reducers';
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware from 'redux-saga';
import startup from './startup';
import rootSaga from './store/sagas';
import Home from "./views/Home";
import Login from "./containers/Login";

const sagaMiddleware = createSagaMiddleware();

const createRootReducer = (history) => combineReducers({
	...reducers,
	router: connectRouter(history),
});

export const store = createStore(
	createRootReducer(history),
	applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);

startup(store);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path='/' component={Login}/>
				<Route path='/home' component={Home}/>
			</Switch>
		</ConnectedRouter>
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
