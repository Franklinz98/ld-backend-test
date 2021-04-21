import createError from "http-errors";
import { genHash, testHash } from "./bcrypt";
import { fetchKey, getIds, storeKey } from "./database";

// Controllers to export

export function generateApikey(req: any, res: any, next: any) {
  const id: number = req.params.id;
  genHash(id, (key: string) => {
    storeKey(id, key)
      .then(() => {
        res.send({
          uid: id,
          key: key,
        });
      })
      .catch((error) => {
        next(new createError.InternalServerError(error));
      });
  });
}

export async function checkApiKey(req: any, res: any, next: any) {
  if (req.headers.key) {
    let key: string = req.headers.key;
    const ids = await getIds();
    let id = testHash(key, ids);
    if (id) {
      req.currentId = id;
      next();
    } else {
      next(new createError.Unauthorized("Bad API key"));
    }
  } else {
    next(new createError.Unauthorized("API Key missing"));
  }
}

export function getApikey(req: any, res: any, next: any) {
  const id: number = req.params.id;
  fetchKey(id)
    .then((key) => {
      res.send({
        key: key,
      });
    })
    .catch((error) => {
      next(new createError.InternalServerError(error));
    });
}
