// getter & setter through Object

const User = {
    _email: 'd@dk.com', 
    _password: 'abc456',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
} 

const tea = Object.create(User) 
console.log(tea.email);