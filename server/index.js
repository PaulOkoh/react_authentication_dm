require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT } = process.env;
const {
  getAllPosts,
  getCurrentUserPosts,
  addPost,
  editPost,
  deletePost,
} = require("./controllers/posts");
const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");
const { sequelize } = require("./util/database");
const { User } = require("./models/user");
const { Post } = require("./models/post");
const app = express();

User.hasMany(Post);
Post.belongsTo(User);

app.use(express.json());
app.use(cors());

//AUTH
app.post("/register", register);
app.post("/login", login);

//GET POSTS - no auth
app.get("/posts", getAllPosts);

//CRUD POSTS -auth required
app.get("/userposts/:userid", getCurrentUserPosts);
app.post("/posts", isAuthenticated, addPost);
app.put("/post/:id", isAuthenticated, editPost);
app.delete("/posts/:id", isAuthenticated, deletePost);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`db sync successful & server running on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
