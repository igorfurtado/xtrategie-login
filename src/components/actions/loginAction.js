import User from '../User';

export function addItem(email, password) {
    const item = new User(email, password);
    console.log(item);
    return { type: "ADD_ITEM", payload: item };
};