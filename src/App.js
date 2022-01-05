import React from 'react';
import Footer from './components/Footer';
import Grid from '@material-ui/core/Grid';
import './CSS/index.css';
import BoxWrapper from './components/BoxWrapper';
import myReducer from './reducers/myReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const SAVED_ITEMS = "savedItems";

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
};

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState) {
        return JSON.parse(actualState);
    }
    else {
        return [];
    }
};

const store = createStore(myReducer, loadState());

//Persistindo o estado

store.subscribe(() => {
    persistState(store.getState());
});

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
