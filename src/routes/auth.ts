import express from "express";
import * as apikey_controller from "../controllers/apikey";
import { validateUserId } from "../controllers/validation";
var router = express.Router();

/* CREATE API key */
router.post(
  "/generate-apikey/:id",
  validateUserId,
  apikey_controller.generateApikey
);

/* GET API key */
router.get("/get-apikey/:id", validateUserId, apikey_controller.getApikey);

module.exports = router;
