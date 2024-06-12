// getter & setter through class

class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value 
    }

    get password(){
        return `${this._password}deep`
    }

    set password(value){
        this._password = value 
    }
}

const deep = new User("d@deep.com", 123) 
console.log(deep.email); 