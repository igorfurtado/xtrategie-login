function random() {
    let number = parseInt(Math.random() * 10000);
    return number;
};

class User {

    constructor(email, password) { //text é a descrição do novo item
        this.id = random();
        this.email = email;
        this.password = password;
    };
};

export default User;