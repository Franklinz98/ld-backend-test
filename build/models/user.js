"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, lastname, birthdate, email, id, area, salary, state = "active") {
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.id = id;
        this.area = area;
        this.salary = salary;
        this.state = state;
    }
    static fromJson(user) {
        return new User(user.name, user.lastname, user.birthdate, user.email, user.id, user.area, user.salary, user.state);
    }
    toJson() {
        return {
            name: this.name,
            lastname: this.lastname,
            birthdate: this.birthdate,
            email: this.email,
            id: this.id,
            area: this.area,
            salary: this.salary,
            state: this.state,
        };
    }
}
exports.default = User;
