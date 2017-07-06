import express from "express";
import {list, create, update, remove} from "../controllers/ItemController";

const router = express.Router();

router.get("/items", list);
router.post("/items", create);
router.post("/items/:id", update);
router.delete("/items/:id", remove);

export default router;