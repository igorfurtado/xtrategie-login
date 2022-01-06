import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';
import './CSS/index.css';
import BoxWrapper from './components/BoxWrapper';
import myReducer from './reducers/myReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {

    return (
        <Grid container component="main" className='container'>
            <Provider store={store}>
                <BoxWrapper />
                <Footer />
            </Provider>
        </Grid>
    );
};

export default App;
