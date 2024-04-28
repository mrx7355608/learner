import { validateMongoID } from "../../../utils/validateMongoId.js";
import { ApiError } from "../../../utils/ApiError.js";

export default function fetchUserProfileFactory({ usersDB }) {
    return async function (id) {
        // Validate id
        validateMongoID(id, "user");

        // Check if users exists
        const user = await usersDB.findUserById(id);
        if (!user) {
            throw new ApiError("User not found", 404);
        }

        // Remove sensitive fields
        user.__v = undefined;
        user.updatedAt = undefined;
        user.password = undefined;
        user.email = undefined;
        user.googleId = undefined;

        return user;
    };
}
