const router = require("express").Router();
const newPost = require("../../models/post");

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

    newPost = new newPost();

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
    db.collection("newPost").insertOne(req.body, (err, data) => {
      if (err) return console.log(err);
      res.send("saved to db: " + data);
    });
  });
};

module.exports = router;
