const User = require('../../models/user');
const UserSession = require('../../models/userSession');

module.exports = (app) => {
    app.get('/api/login', (req, res, next));

    app.post('/api/login', (req, res, next) => {
        const { body } = req;
        const {
            username,
            password
        } = body;
        let {
        email
        } = body;

        if (!username) {
            return res.send({
                success:false,
                message: 'Error: Please enter a username'
            });
        }
        if (!password) {
            return res.send({
                success:false,
                message: 'Error: Please enter a password'
            });
        }
        if (!email) {
            return res.send({
                success:false,
                message: 'Error: Please enter an email'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, pastUsers) => {

        if(err){
            return res.send({
                success: false,
                message: 'Server Error'
            });
        }
        else if (pastUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Account already exsists'
            });
        }

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
    });

    app.post('api/account/login', (req, res, next) => {
                const {body} = req;
                const {
                    password
            } = body;
            let {
                email
            } = body;

            

            if (!username) {
                return res.send({
                    success:false,
                    message: 'Error: Please enter a username'
                });
            }
            if (!password) {
                return res.send({
                    success:false,
                    message: 'Error: Please enter a password'
                });
            }
            if (!email) {
                return res.send({
                    success:false,
                    message: 'Error: Please enter an email'
                });
            }
            
            email = email.ToLowerCase;

            User.find({
                email:email
            }, (err, users) => {
                if (err) {
                    return res.send({
                        success:false,
                        message: 'Error: Server Error'
                    });
                }

                const user = users[0];
                if (!user.validPassword(password)){
                    return res.send({
                        success:false,
                        message: 'Error: Invalid Password'
                    });
                }

                const userSession = new UserSession();
                userSession.userId = user._id;
                userSession.save((err, doc) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Error: Server Error'
                        })
                    }

                    return res.send({
                        success: true,
                        message: 'Success!: you are signed in',
                        token: doc._id
                    });
                });
            });
    });
};

// document.getElementById("signup-btn").addEventListener('click', signup);
// document.getElementById("login-btn").addEventListener('click', loginHandler);