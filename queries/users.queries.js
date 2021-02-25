const User = require('../database/models/user.model');

exports.createUser = async (user) => {
    try {
        const hashedPassword = await User.hashPassword(user.password);
        const newUser = new User({
            username : user.username,
            local: {
                email : user.email,
                password: hashedPassword
            }
        });
        return newUser.save();
    }catch (e) {
        throw e;
    }
}

exports.findUserPerMail = (email) => {
    return users.findOne({ 'local.email ': email}).exec();
}

exports.findUserPerId = (id) => {
    return users.findById(id).exec();
}