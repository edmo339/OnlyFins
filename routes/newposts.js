const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const newpostsController = require("../controllers/newposts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, newpostsController.getNewPost);

router.post("/createPost", upload.single("file"), newpostsController.createPost);

router.get("/:id", ensureAuth, newpostsController.getPost);

router.put("/likePost/:id", newpostsController.likePost);

router.delete("/deletePost/:id", newpostsController.deletePost);


module.exports = router;

