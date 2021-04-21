"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apikey_1 = require("../controllers/apikey");
const area_controller = __importStar(require("../controllers/areas"));
const validation_1 = require("../controllers/validation");
var router = express_1.default.Router();
/* Areas CRUD */
/* POST area */
router.post("/create", apikey_1.checkApiKey, validation_1.validateAreaData, area_controller.createArea);
/* GET areas listing. */
router.get("/all", apikey_1.checkApiKey, area_controller.getAllAreas);
/* GET area data */
router.get("/:code", apikey_1.checkApiKey, validation_1.validateAreaCode, area_controller.getArea);
/* UPDATE area data */
router.put("/update", apikey_1.checkApiKey, validation_1.validateAreaData, area_controller.updateArea);
/* DELETE area data */
router.delete("/delete/:code", apikey_1.checkApiKey, validation_1.validateAreaCode, area_controller.removeArea);
module.exports = router;
