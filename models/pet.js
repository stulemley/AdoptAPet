const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters or longer"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be 3 characters or longer"]
    },
    desc: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters or longer"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
    likes: {
        type: Number,
        liked: false,
        default: 0
    }
}, { timestamps: true });

mongoose.model("Pet", PetSchema);