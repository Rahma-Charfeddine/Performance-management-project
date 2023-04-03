const mongoose = require('mongoose');
const periodSchema = new mongoose.Schema(
  {
    year: {
      type: Number, // 
      required: true,
      min_value: 2000,
      max_value: 2070,
    },
    half: {
        type: number,
        enum: [1, 2],
    },
    reference: {
        type: String,
        required: true,
        length: 10,
    },
  },
  {
    timestamps: true,
  }

);




const PeriodModel = mongoose.model("period", periodSchema);

module.exports = PeriodModel;