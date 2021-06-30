const User = require('../../models/user');
const UserSession = require('../../models/userSession');

module.exports = (app) => {
    app.get('/api/userSession', (req, res, next));

    app.post('/api/userSession', (req, res, next) => {
        const { body } = req;
        const {
            username,
            password
        } = body;
        let {
            email
        } = body;

        // if (!username) {
        //     return res.send({
        //         success:false,
        //         message: 'Error: Please enter a username'
        //     });
        // }
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
        email = email.trim();


        User.find({
            email: email
        }, (err, pastUsers) => {

            if (err) {
                return res.send({
                    success: false,
                    message: 'Server Error'
                });
            }
            else if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Account already exsists'
                });
            }
            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
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

    }
    )
};