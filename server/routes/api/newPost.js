const router = require("express").Router();
const Post = require("../../models/post");

function postTest(event) {
  event.preventDefault();
  console.log(post);
}

console.log(postTest);

module.exports = (app) => {
  app.post("/api/newPost", (req, res, next) => {
    const { body } = req;
    const { drinkname, barname, description } = body;
    let { file } = body;

    const post = posts[0];

    const newPost = new Post();

    newPost.drinkname = drinkname;
    newPost.barname = barname;
    newPost.description = description;
    newPost.file = file;
    newPost.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Server Error",
        });
      }
      return res.send({
        success: true,
        message: "Post data received",
      });
    });
    db.collection("cocktails").insertOne(req.body, (err, data) => {
      if (err) return console.log(err);
      res.send("saved to db: " + data);
    });
  });
};

module.exports = router;
