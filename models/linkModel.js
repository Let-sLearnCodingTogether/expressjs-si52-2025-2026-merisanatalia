import mongoose from "mongoose"
import UserModel from "./userModel"
import ProfileModel from "./profileModel"

const LinkSchema = new mongoose.Schema (
    {
        tittle : {
            type : String,
            required : [true, " Tittle wajib di isi"],
            unique : true,
            trim : true
        },
        icon : {
            type : String,
            required : true,
            unique : true,
            trim : true
        },
        url : {
            type : String,
            required : true,
            trim : true,
            unique : true
        },
        user: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    },
    {
        timestamps : true
    }
)

const LinkModel = mongoose.model("Profile", LinkSchema)

export default LinkModel