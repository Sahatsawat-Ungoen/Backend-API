import express from "express";
import categoryFileUpload from "../config/categoryUpload.js";
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
} from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const categoriesRouter = express.Router();

categoriesRouter.post(
  "/",
  isLoggedIn,
  categoryFileUpload.single("file"),
  createCategoryCtrl
);
categoriesRouter.get("/", getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoryCtrl);
categoriesRouter.put("/:id", updateCategoryCtrl);
categoriesRouter.delete("/:id", deleteCategoryCtrl);

export default categoriesRouter;
