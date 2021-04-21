import db from "../database";
import Area from "../models/area";
import { AreaData, UserData } from "../models/types";
import User from "../models/user";

/* API Key */

export async function storeKey(id: number, key: string): Promise<void> {
  try {
    await db.query("UPDATE users set ? WHERE id = ?", [{ apikey: key }, id]);
  } catch (error) {
    throw error;
  }
}

export async function fetchKey(id: number): Promise<string> {
  try {
    const queryResult: any = await db.query(
      "SELECT id, apikey FROM users WHERE id = ?",
      id
    );
    return queryResult[0].apikey;
  } catch (error) {
    throw error;
  }
}


/* Users */

export async function getIds(): Promise<Array<UserData>> {
  try {
    // @ts-ignore
    const ids: Array<UserData> = await db.query("SELECT id FROM users");
    return ids;
  } catch (error) {
    throw error;
  }
}

export async function addUser(user: User) {
  try {
    await db.query("INSERT INTO users set ?", [user.toJson()]);
  } catch (error) {
    throw error;
  }
}

export async function fetchUser(id: number): Promise<User> {
  try {
    // @ts-ignore
    var queryResult: any = await db.query("SELECT * FROM users WHERE id = ?", [
      id,
    ]);
    return User.fromJson(queryResult[0]);
  } catch (error) {
    throw error;
  }
}

export async function fetchAllUsers(): Promise<Array<UserData>> {
  try {
    // @ts-ignore
    const users: Array<UserData> = await db.query("SELECT * FROM users");
    return users;
  } catch (error) {
    throw error;
  }
}

export async function uptUser(data: UserData) {
  try {
    await db.query("UPDATE users set ? WHERE code = ?", [data, data.id]);
  } catch (error) {
    throw error;
  }
}

export async function rmvUser(id: number) {
  try {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
  } catch (error) {
    throw error;
  }
}

/* Areas */

export async function addArea(data: Area) {
  try {
    await db.query("INSERT INTO areas set ?", [data.toJson()]);
  } catch (error) {
    throw error;
  }
}

export async function fetchArea(code: number): Promise<Area> {
  try {
    // @ts-ignore
    var queryResult: any = await db.query(
      "SELECT * FROM areas WHERE code = ?",
      code
    );
    return Area.fromJson(queryResult[0]);
  } catch (error) {
    throw error;
  }
}

export async function fetchAllAreas(): Promise<Array<AreaData>> {
  try {
    // @ts-ignore
    const areas: Array<AreaData> = await db.query("SELECT * FROM areas");
    return areas;
  } catch (error) {
    throw error;
  }
}

export async function uptArea(data: AreaData) {
  try {
    await db.query("UPDATE areas set ? WHERE code = ?", [data, data.code]);
  } catch (error) {
    throw error;
  }
}

export async function rmvArea(code: number) {
  try {
    await db.query("DELETE FROM areas WHERE code = ?", [code]);
  } catch (error) {
    throw error;
  }
}
