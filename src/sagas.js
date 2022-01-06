import { takeEvery, put } from 'redux-saga/effects';

function* asyncAddItem(action) {
    yield put({ type: 'ADD_ITEM', payload: action.payload }); // Acessando o reducer e atualizando o estado
    console.log(action.payload); // Apresentando os dados do usuário
};

export default function* root() {
    yield takeEvery('ASYNC_ADD_ITEM', asyncAddItem) // Repassando o conteúdo da action do reducer para a função asyncAddItem;
};