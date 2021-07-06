const router = require("express").Router();
//const { application } = require("express");
const newPostEl = require("../../models/newPost");

function postTest(event) {
  event.preventDefault();
  console.log(post + "post here");
}

console.log(postTest);

module.exports = (app) => {
  app.post("/api/user", (req, res, next) => {
    const { body } = req;
    const { drinkname, barname, description } = body;
    //let { file } = body;


    //const post = posts[0];

    const newPost = new newPostEl();

    newPost.drinkname = drinkname;
    newPost.barname = barname;
    newPost.description = description;
    //newPost.file = file;
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
    /*db.collection("newPost").insertOne(req.body, (err, data) => {
      if (err) return console.log(err);
      res.send("saved to db: " + data);
    });*/
  });
};

module.exports = router;
