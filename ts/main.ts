// function numberFn(a: number, b: number) {
//
// }
// numberFn(10, 20);
//
// function stringFn (a: string, b:string) {
//
// }
// stringFn('hello', 'world')

class UserType1 {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    // info(): void {
    //
    // }

    info(): string {
        return this.name;
    }
}


function paramFn(
    str: string,
    num: number,
    user: UserType1,
    skills: string[],
    users: { name: string, status: boolean } []
) {

}

paramFn(
    'hello',
    567,
    new UserType1('oleh', 25, false),
    ['js', 'ts'],
    [{name: 'nikolai', status: false}, {name: 'taras', status: true}]
)

interface Car {
    model: string;
    power: number;
    producer?: string;
    drive: (a: number) => number
}

function foobar(car: Car) {

}

foobar({
    model: 'kia',
    power: 88,
    producer: 'FHI',
    drive: function () {
        return 888;
    }
})

foobar({
    model: 'kia',
    power: 88,
    drive: () => {
        return 88888
    }
});

class BMW implements Car {
    model: string;
    power: number;
    producer: string;
    awd: boolean = true;

    drive(a: number): number {
        return 0;
    }

    constructor(model: string, power: number, producer: string, awd: boolean) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.awd = awd;
    }

    tuning(): void {

    }
}

class Audi implements Car {
    model: string;
    power: number;
    producer: string;
    price: number;

    drive(a: number): number {
        return 0;
    }

    constructor(model: string, power: number, producer: string, price: number) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.price = price;
    }
}

let cars: Car[] = [
    new BMW('x5', 188, 'bmw', true),
    new Audi('Q8', 188, 'audi', 88888)
];

let firstCar = cars[0] as BMW;
firstCar.tuning();
console.log(firstCar.awd);


class Client {
    name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    //
    // get age(): number {
    //     return this._age;
    // }
    //
    // set age(value: number) {
    //     this._age = value;
    // }

    setNewAge (newAge) {
        if (newAge > 18) {
            this._age = newAge
        }}
}

let client = new Client('nikita', 18);
// client.age = 28;
client.setNewAge(28);

enum Gender{
    MALE = 'male',
    FEMALE = 'female'
}

function foobar2(gender: Gender) {
console.log(gender)
}
foobar2(Gender.FEMALE)