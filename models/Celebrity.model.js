//  Add your code here
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrityScema = new Schema({
   name: String,
   occupation: String,
   catchPhrases: String
})

const Celebrity = mongoose.model("Celebrity", celebrityScema);
module.exports = Celebrity;

