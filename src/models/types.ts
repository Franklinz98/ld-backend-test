export type StateType = "active" | "inactive";

export interface UserData {
  name: string;
  lastname: string;
  birthdate: Date;
  email: string;
  id: number;
  area: number;
  salary: number;
  state: StateType;
}

export interface AreaData {
  code: number;
  name: string;
  leader: number;
  state: StateType;
}
