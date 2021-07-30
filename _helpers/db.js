const config = require('config.json');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://@cluster0-xdugw.mongodb.net/test'
mongoose
     .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));
mongoose.Promise = global.Promise;
 
module.exports = {
    Account: require('accounts/account.model'),
    RefreshToken: require('accounts/refresh-token.model'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}