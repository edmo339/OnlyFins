const cloudinary = require("../middleware/cloudinary");
const Perfil = require("../models/Perfil");

module.exports = {
  
///////////////////////  new post  //////////////////////////////////
 // getNewPost: (req, res) => {
   // res.render("newpost.ejs");
 // },
/*
getPerfil: (req, res) => {
      res.render("perfil.ejs");
    }
    res.render("login", {
        title: "Login",
      });
  */
      getPerfil: async (req, res) => {
        try {
          const posts = await Perfil.find({ user: req.user.id });
          const perfil = await Perfil.find({ user: req.user.id });
          res.render("perfil.ejs", { posts: posts, user: req.user, perfil: perfil });
        } catch (err) {
          console.log(err);
        }
      },

  //
  profilePic: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Perfil.create({
        bio: req.body.bio,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.user.id,
      });
      console.log("Profile Pic has been updated!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  //
 
};
