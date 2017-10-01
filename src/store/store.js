import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import thunk from 'redux-thunk'
import devToolsEnhancer from 'remote-redux-devtools'

import stopsReducer from '../reducers/stopsReducer'
import createNavReducer from '../reducers/navReducer'

const configureStore = appNavigator => {

    const reducers = combineReducers({
        stops: stopsReducer,
        nav: createNavReducer(appNavigator)
    })

    const middleware = compose(applyMiddleware(thunk, reduxPackMiddleware), devToolsEnhancer({ realtime: true }))

    return createStore(reducers, middleware)
}

export default configureStore