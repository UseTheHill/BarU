const newPost = require('../../models/newPost');

const router = require('express').Router();

router.route('/').post(function (req, res) {

    newPost.create(
        req.body
    )
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            console.log(err);
        })

});

module.exports = router;