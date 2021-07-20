// // 1. Створити інтерфейс:
//
// interface User {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     address: Address;
//     phone: string;
//     website: string;
//     company: Company;
// }
//
// interface Address {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: number;
//     geo: Geo;
// }
//
// interface Geo {
//     lat: number;
//     lng: number;
// }
//
// interface Company {
//     name: string;
//     catchPhrase: string;
//     bs: string;
// }
//
// function info(user: User) {
//
// }
//
// info({
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: 92998-3874,
//         geo: {
//             lat: -37.3159,
//             lng: 81.1496,
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// })
//


// // 2.Типізувати функцію:
//
// function concat(text1: string, text2: string): string {
//     return text1 + text2
// }

// //3. Створити клас юзера з полями і методами:
//
// class User {
//     private _name: string;
//     private _age: number;
//     private _city: string;
//     private _status: boolean;
//
//     constructor(name: string, age: number, city: string, status: boolean) {
//         this._name = name;
//         this._age = age;
//         this._city = city;
//         this._status = status;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get age(): number {
//         return this._age;
//     }
//
//     set age(value: number) {
//         this._age = value;
//     }
//
//     get city(): string {
//         return this._city;
//     }
//
//     set city(value: string) {
//         this._city = value;
//     }
//
//     changeStatus () {
//         this._status = !this._status
//     }
// }
// //
// // 4. Написать интерфейс Animal который описывает: тип движения животного(плавает, ходит, бегает) типа стринг
// // что говорит тип стринг и функцию которая возвращает информацию о животном.
// // Создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal.

// interface Animal {
//     action: string;
//     say: string;
//
//     info ():string;
// }
//
// class Cat implements Animal {
//     constructor(say: string) {
//         this.action = 'walk';
//         this.say = say;
//     }
//     action: string;
//     say: string;
//
//     info(): string {
//         return `Cat ${this.action} and say ${this.say}`;
//     }
//
// }
//
// class Bird implements Animal {
//     constructor() {
//         this.action = 'fly';
//         this.say = 'i am flying';
//     }
//
//     action: string;
//     say: string;
//
//     info(): string {
//         return `Bird ${this.action} and say ${this.say}`
//     }
// }
//
// class Fish implements Animal {
//     constructor(action: string, say: string) {
//         this.action = action;
//         this.say = say;
//     }
//     action: string;
//     say: string;
//
//     info(): string {
//         return `Fish ${this.action} and say ${this.say}`
//     }
// }

