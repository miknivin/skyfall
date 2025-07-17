import express from "express";
import { validateAdminRequest } from "./../middlewares/validateAdminRequest.js";
import {
  createAdminRequest,
  generateUploadPresignedUrl,
  generateViewPresignedUrl,
} from "../controllers/adminController.js";
import { isAuthenticateUser } from "./../middlewares/auth.js";

const router = express.Router();

router.route("/admin/request").post(validateAdminRequest, createAdminRequest);
router
  .route("/admin/request/pre-signedurl")
  .post(isAuthenticateUser, generateUploadPresignedUrl);
router
  .route("/admin/request/pre-signedurl-view")
  .post(isAuthenticateUser, generateViewPresignedUrl);
export default router;
