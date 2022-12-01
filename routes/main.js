const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const newpostsController = require("../controllers/newposts");
const perfilController = require("../controllers/perfil");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/profile/:user", postsController.getOtherProfile);

///
router.get("/newpost", ensureAuth, newpostsController.getNewPost);
///
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//
router.get("/perfil", ensureAuth, perfilController.getPerfil);


module.exports = router;
