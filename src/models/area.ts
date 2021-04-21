import { AreaData, StateType } from "./types";

export default class Area {
  code: number;
  name: string;
  leader: number;
  state: StateType;

  constructor(
    code: number,
    name: string,
    leader: number,
    state: StateType = "active"
  ) {
    this.code = code;
    this.name = name;
    this.leader = leader;
    this.state = state;
  }

  static fromJson(area: AreaData): Area {
    return new Area(area.code, area.name, area.leader, area.state);
  }

  toJson(): Object {
    return {
      code: this.code,
      name: this.name,
      leader: this.leader,
      state: this.state,
    };
  }
}
