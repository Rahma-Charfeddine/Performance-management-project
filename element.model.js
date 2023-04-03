const mongoose = require('mongoose');
const elementSchema = new mongoose.Schema(
    {  
        subprocess_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        element_name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 50,
            unique: true,
        },
        description : {
            type: String,
            minlength: 3,
            maxlength: 500,
        }
        
    },
    {
        timestamps: true,
    }
);


const ProcessModel = mongoose.model("element", elementSchema);

module.exports = ProcessModel;