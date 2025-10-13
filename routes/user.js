const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const User=require("../models/user.js");
const passport=require("passport");
const { isLoggedIn } = require("../middleware.js");
const { returnTo } = require("../middleware.js");
const userController=require("../controllers/users.js");
const user = require("../models/user.js");

// render signup form and handle signup logic
router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.handleSignup));

// render login form and handle login logic
router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(returnTo,passport.authenticate("local",
    {
        failureRedirect:"/login",
        failureFlash:true
    }),
    userController.handleLogin
    );

//logout route
router.get("/logout",userController.logout);

module.exports = router;