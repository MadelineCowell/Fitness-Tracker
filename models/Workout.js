const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//date (day), type, name, duration, distance?  weight, reps, sets
const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },

    exercise: {
        type: { type: String, trim: true, required: "Type of exercise" },
        name: { type: String, trim: true, required: "Exercise name" },
        duration: { type: Number, required: "Duration of exercise" },
        distance: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number }
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = mongoose.model('Workout', Workout)

// const Workout = new mongoose.Schema({