class People {
    id !: number;
    name !: string;
    isAdullt !: boolean;
}

let person1 = new People();
person1.id = 1;
person1.name = "John";
person1.isAdullt = true;





class Employee {
    name: string;
    age: number;
    isAdmin: boolean;

    #testingGetSet: string;

    get test(): string {
        return this.#testingGetSet;
    }

    set test(value: string) {
        this.#testingGetSet = value;
    }

    static getDetails(): string {
        return `This cannot be accesed by instance only by Employee.getDetails`
    }

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
        this.#testingGetSet = 'Working'
    }

    getNameAndAge(): string {
        return `${this.name} is ${this.age} years old.`
    }
}

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
