const User=require("../models/user.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.handleSignup=async (req,res,next)=>{
    try{
        let {email,username,password}=req.body;
        const newUser=new User({email,username});
        const registeredUser=await User.register(newUser,password);
        req.login(registeredUser,err=>{
            if(err) return next(err);
            req.flash("success","Welcome to NextJourney!");
            const redirectUrl = req.session.returnTo || "/listings";
            delete req.session.returnTo;
            res.redirect(redirectUrl);
        });
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
};
    


module.exports.handleLogin=async (req,res)=>{
    req.flash("success","Welcome to NextJourney!");
    const redirectUrl = res.locals.returnTo || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You have logged out successfully!");
        res.redirect("/login");
    });
};