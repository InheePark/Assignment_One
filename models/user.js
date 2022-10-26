/*
login, auth info schema for app
Inhee Park (301162514)
October 21st, 2022
*/

let mongoose = require('mongoose');
let crypto = require('crypto');
let Schema = mongoose.Schema;

// user login, auth data model details
// schema for user signup, this will be stored in another collection
let UserSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String, // string data type
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"]
            // match: [(regex), (error message)]
        },
        username: {
            type: String,
            unique: true, 
            // field must be unique in the collection
            // 2 usernames should not be the same within the collection
            required: 'Username is required',
            // required (should not be null)
            trim: true
            // cut out unnecassery spaces
        },
        password: {
            type: String,
            // string datatype
            validate: [(password) => {
                // validate -> special conditions for password
                // validate: [(password) => {(condition)}, (error message)]
                return password && password.length > 6;
            }, 'Password should be longer']
        },
        salt: {
            type: String
        },
        provider: {
            type: String,
            required: 'Provider is required'
        },
        providerId: String,
        providerData: {},
        created: {
            type: Date,
            default: Date.now
            // register the time the user has created
        }
    },
    {
        collection: "user"
    }
);

// virtual data set
// (schema name).virtual('(attribute name)').get((code for retrieving data)).set((setting the code))
UserSchema.virtual('fullName')
.get(function() {
    // return the data we want to manipulate
    return this.firstName + ' ' + this.lastName;
})
.set(function(fullName) {
    // setting the retrieved data from get to set
    let splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// pre middleware
// the middleware code encrypting the password
UserSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

// crypto for password details
// extra details
UserSchema.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// authenticating password after 
// crypto
UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};


// finding unique username when signin, signup
UserSchema.statics.findUniqueUsername = function(username, suffix,
    callback) {
    var possibleUsername = username + (suffix || '');
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        if (!err) {
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) +
                    1, callback);
            }
        } else {
            callback(null);
        }
    });
};

UserSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

module.exports = mongoose.model('User', UserSchema);