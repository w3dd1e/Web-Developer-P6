const express = require("express");
const mongodb = require("./app/database/mongodb");
const path = require("path");
const userRoutes = require("../back/app/routes/user");
const sauceRoutes = require("../back/app/routes/sauce");
const likeRoutes = require("../back/app/routes/like");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/auth", userRoutes);
app.get("/api/sauces", sauceRoutes);
app.get("/api/sauces/:id", sauceRoutes);
app.post("/api/sauces", sauceRoutes);
app.delete("/api/sauces/:id", sauceRoutes);
app.put("/api/sauces/:id", sauceRoutes);
app.post("/api/sauces/:id/like", likeRoutes);

module.exports = app;
