interface User {
    name: string;
    id: number;
    email: string;
    age?: number;
    login(): boolean
}

let user: User = {
    email: 'john@gmail.com',
    id: 0,
    name: 'John',
    login: () => false
}

console.log(user.login())



// interface Person extends User{
//     income: number
// }

// let person : Person = {
//     income: 20000,
//     email: 'james@gmail.com',
//     id: 1,
//     name: 'james'
// }