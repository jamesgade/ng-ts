"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_testingGetSet;
class People {
}
let person1 = new People();
person1.id = 1;
person1.name = "John";
person1.isAdullt = true;
class Employee {
    constructor(name, age, isAdmin) {
        _Employee_testingGetSet.set(this, void 0);
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
        __classPrivateFieldSet(this, _Employee_testingGetSet, 'Working', "f");
    }
    get test() {
        return __classPrivateFieldGet(this, _Employee_testingGetSet, "f");
    }
    set test(value) {
        __classPrivateFieldSet(this, _Employee_testingGetSet, value, "f");
    }
    static getDetails() {
        return `This cannot be accesed by instance only by Employee.getDetails`;
    }
    getNameAndAge() {
        return `${this.name} is ${this.age} years old.`;
    }
}
_Employee_testingGetSet = new WeakMap();
let emp = new Employee('James', 21, true);
const emp1Details = emp.getNameAndAge();
// console.log(Emp1);
// console.log(emp.test);
emp.test = 'Changed';
// console.log(emp.test);
// console.log(Employee.getDetails())
// class Family {
//     name: string;
//     #role: string; // private members
//     private over18: boolean; // private members
//     protected familySecrets?: string;
//     constructor(name: string, role: string, over18: boolean, secrets?: string) {
//         this.name = name;
//         this.#role = role;
//         this.over18 = over18;
//         this.familySecrets = secrets;
//     }
// }
// const heir = new Family('John', 'son', true);
// // console.log(heir);
// class Friends extends Family {
//     constructor(name: string, role: string, over18: boolean){
//         super(name, role, over18)
//     }
// }
// const bff = new Friends('Amruth', 'buddy', true);
// console.log(bff);
