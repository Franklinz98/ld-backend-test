"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Area {
    constructor(code, name, leader, state = "active") {
        this.code = code;
        this.name = name;
        this.leader = leader;
        this.state = state;
    }
    static fromJson(area) {
        return new Area(area.code, area.name, area.leader, area.state);
    }
    toJson() {
        return {
            code: this.code,
            name: this.name,
            leader: this.leader,
            state: this.state,
        };
    }
}
exports.default = Area;
