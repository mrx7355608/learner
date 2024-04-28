import { Schema, model } from "mongoose";
import bc from "bcryptjs";

const userSchema = new Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        googleId: { type: String, required: true },
        profilePicture: {
            type: String,
            default:
                "https://res.cloudinary.com/doemiclic/image/upload/v1693055588/default_user_eqn3vt.png",
        },
        about: { type: String, default: "" },
        courses_created: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Course",
                },
            ],
            default: [],
        },
        courses_enrolledin: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Course",
                },
            ],
            default: [],
        },
    },
    {
        timestamps: true,
    },
);

// Pre document middleware to hash password
// if user is newly registered or changes his password
userSchema.pre("save", async function (next) {
    if (this.password && this.isModified("password")) {
        const hashedPassword = await bc.hash(this.password, 12);
        this.password = hashedPassword;
        next();
    } else {
        next();
    }
});

const UserModel = model("User", userSchema);

export { UserModel };
