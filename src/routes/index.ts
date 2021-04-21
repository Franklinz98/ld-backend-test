import express from "express";
import { addUser, storeKey } from "../controllers/database";
var router = express.Router();

/* GET home page. */
router.get("/", function (req: any, res: any, next: any) {
  // storeKey();
  console.log(typeof Date);
  
  res.render("index", { title: "Express" });
});

module.exports = router;
