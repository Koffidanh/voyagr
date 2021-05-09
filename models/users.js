const { Mongoose } = require("mongoose");

const schema = new Mongoose.Schema({ email: 'string', password: 'string' });
const User = mongoose.model('User', schema);

module.exports = User