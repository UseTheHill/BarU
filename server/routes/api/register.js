const router = require('express').Router();
const User = require('../../models/user');


async function signup(event) {
    event.preventDefault();

    console.log(userObject);

    module.exports = (app) => {
        app.get('/api/register', (req, res, next));
    }

    app.post('/api/login', (req, res, next) => {
        const { body } = req;
        const {
            email,
            password
        } = body;

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Please enter a password'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'Error: Please enter an email'
            });
        }

        email = email.toLowerCase();

        const newUser = new User();

        newUser.email = email;
        newUser.username = username;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Server Error'
                });
            }
            return res.send({
                success: true,
                message: 'Successfully signed up'
            });
        });
    });
    // const response = await fetch(
    //     "/api/user",
    //     {
    //         method: "POST",
    //         body: JSON.stringify(userObject),
    //         headers: {
    //             "Content-Type": "application/json",
    //         }
    //     }

    // )
    // .then(() => {
    //   if(response.ok){
    //     console.log("success");
    //     alert("you successfully signed up!");
    //   }else{
    //     alert("failed to sign up. Please try again.");
    //   }

    // })
    // .catch(error => {
    //     console.log(error);
    // })
}

module.exports = router;