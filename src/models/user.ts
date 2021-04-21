import { StateType, UserData } from "./types";

export default class User {
  name: string;
  lastname: string;
  birthdate: Date;
  email: string;
  id: number;
  area: number;
  salary: number;
  state: StateType;

  constructor(
    name: string,
    lastname: string,
    birthdate: Date,
    email: string,
    id: number,
    area: number,
    salary: number,
    state: StateType = "active"
  ) {
    this.name = name;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.email = email;
    this.id = id;
    this.area = area;
    this.salary = salary;
    this.state = state;
  }

  static fromJson(user: UserData): User {
    return new User(
      user.name,
      user.lastname,
      user.birthdate,
      user.email,
      user.id,
      user.area,
      user.salary,
      user.state
    );
  }

  toJson(): Object {
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
