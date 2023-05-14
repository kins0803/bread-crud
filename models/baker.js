const mongoose = require('mongoose')

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        enum: ['Rachel', 'Ross', 'Monica', 'Joey', 'Chandler', 'Phoebe']
    },
    startDate: {
        type: Date,
        require: true
    },
    bio: String
}, {
    toJSON: { virtuals: true }
})

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

module.exports = mongoose.model('Baker', bakerSchema)