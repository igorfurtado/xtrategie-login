import User from '../User';

export function addItem(email, password) {
    const item = new User(email, password);
    return { type: 'ASYNC_ADD_ITEM', payload: [`e-mail: ${item.email} | senha: ${item.password}`] }; // Passando o type que é escutado no sagas
};