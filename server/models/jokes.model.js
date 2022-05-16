const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [2, "Joke must be at least 2 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [2, "Punchline must be at least 2 characters long"]
    }
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;