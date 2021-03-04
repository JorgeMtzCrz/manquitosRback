const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema({
    name: String,
    email: String,
    img: String,
    role: { type: String, enum: ['Admin', 'User'], default: 'User' }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)