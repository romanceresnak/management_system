const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    require: true
  },
  startDate: {
    type: Date,
    required: true
  },
  finishDate: {
    type: Date,
    required: false
  }
  // workers: [
  //   {
  //     user: {
  //       type: Schema.type.ObjectId,
  //       ref: "user"
  //     }
  //   }
  //]
});

module.exports = Project = mongoose.model("project", ProjectSchema);
