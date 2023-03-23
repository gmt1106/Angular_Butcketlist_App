// require mongoose package
const mongoose = require("mongoose");

// define BucketlistSchema with title, description and category
const BucketlistSchema = mongoose.Schema({
  title: {
    type: String,
    requried: true,
  },
  description: String,
  category: {
    type: String,
    required: true,
    enum: ["High", "Medium", "Low"],
  },
});

const BucketList = (module.exports = mongoose.model(
  "BucketList",
  BucketlistSchema
));

///////// Mongoose functions do not accept callback anymore /////////
// BucketList.find() returns all the lists
module.exports.getAllLists = async () => {
  return BucketList.find();
};

// newList.save is used to insert the documnet into MongoBD
module.exports.addList = async (newList) => {
  return newList.save();
};

// here we need to pass an id parameter to BucketList.deleteOne
module.exports.deleteListById = async (id) => {
  let query = { _id: id };
  return BucketList.deleteOne(query);
};
