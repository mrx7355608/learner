import joi from "joi";
import { ApiError } from "../../utils/ApiError.js";

const editUserValidationSchema = joi.object({
    profilePicture: joi.string().messages({
        "string.empty": "Profile picture url cannot be empty",
        "string.base": "Invalid profile picture url",
    }),
    about: joi.string().min(20).max(300).messages({
        "string.empty": "About cannot be empty",
        "string.base": "Invalid about content",
        "string.min": "About should be 20 characters long at least",
        "string.max": "About cannot be longer than 300 characters",
    }),
});

export function editDataValidator(data) {
    const { error } = editUserValidationSchema.validate(data);
    if (error) {
        throw new ApiError(error.message, 400);
    }
}
