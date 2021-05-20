const { Schema, model } = require("mongoose");

const schema = Schema({ email: 'string', password: 'string' });
const User = model('User', schema);

module.exports = User