const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const perfilController = require("../controllers/perfil");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now


router.post("/profilePic", upload.single("file"), perfilController.profilePic);
//

router.get("/perfil", ensureAuth, perfilController.getPerfil);

module.exports = router;

