import express from "express";
import { checkApiKey } from "../controllers/apikey";
import * as area_controller from "../controllers/areas";
import { validateAreaCode, validateAreaData } from "../controllers/validation";
var router = express.Router();

/* Areas CRUD */

/* POST area */
router.post(
  "/create",
  checkApiKey,
  validateAreaData,
  area_controller.createArea
);

/* GET areas listing. */
router.get("/all", checkApiKey, area_controller.getAllAreas);

/* GET area data */
router.get("/:code", checkApiKey, validateAreaCode, area_controller.getArea);

/* UPDATE area data */
router.put(
  "/update",
  checkApiKey,
  validateAreaData,
  area_controller.updateArea
);

/* DELETE area data */
router.delete(
  "/delete/:code",
  checkApiKey,
  validateAreaCode,
  area_controller.removeArea
);

module.exports = router;
