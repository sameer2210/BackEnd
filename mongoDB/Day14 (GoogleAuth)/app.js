require("dotenv").config();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");

const app = express();

app.use(passport.initialize());
app.set("view engine", "ejs");

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you would typically find or create a user in your database
      // For this example, we'll just return the profile

      return done(null, profile);
    }
  )
);

app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
});

// Route to initiate Google OAuth flow
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback route that Google will redirect to after authentication
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Generate a JWT for the authenticated user

    console.log(req.user);

    const token = jwt.sign(
      { id: req.user.id, displayName: req.user.displayName },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // Send the token to the client
    res.json({ user: req.user, token });
  }
);

// --------------------------------------------------------

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
// --------------------------------------------------------

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});
