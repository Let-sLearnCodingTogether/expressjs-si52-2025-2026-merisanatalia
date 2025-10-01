import mongoose from "mongoose"
import UserModel from "./userModel"

const ProfileSchema = new mongoose.Schema (
    {
        displayName : {
            type : String,
            required : [true, " Display Name wajib di isi"],
            unique : true,
            trim : true
        },
        profilePicture : {
            type : String,
            required : [true, "Profile Picture wajib di isi"]
        },
        bio: {
            type : String,
            minLength : [10, "Minimal 10 karakter"],
            maxLength : [150, "Minimal 150 karakter"],
            required : [true, " Bio wajib di isi"],
            trim : true
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

const ProfileModel = mongoose.Model("Profile", ProfileSchema)

export default ProfileModel