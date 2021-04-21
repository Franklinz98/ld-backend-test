import express from "express";
import { checkApiKey } from "../controllers/apikey";
import * as users_controller from "../controllers/users";
import { validateUserData, validateUserId } from "../controllers/validation";
var router = express.Router();

/* Users CRUD */

/* POST area */
router.post(
  "/create",
  validateUserData,
  users_controller.createUser
);

/* GET users listing. */
router.get("/all", checkApiKey, users_controller.getAllUsers);

/* GET user data */
router.get("/:id", checkApiKey, validateUserId, users_controller.getUser);

/* UPDATE user data */
router.put(
  "/update",
  checkApiKey,
  validateUserData,
  users_controller.updateUser
);

/* DELETE user data */
router.delete(
  "/delete/:id",
  checkApiKey,
  validateUserId,
  users_controller.removeUser
);

module.exports = router;
