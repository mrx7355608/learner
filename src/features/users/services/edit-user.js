import { filterUnwantedFields } from "../../../utils/filterUnwantedFields.js";
import { editDataValidator } from "../user.validators.js";

export default function editUserFactory({ usersDB }) {
    return async function (userId, changes) {
        // Remove un-necessary fields from "changes" object
        const filteredChangesObject = filterUnwantedFields(changes, [
            "profilePicture",
            "about",
        ]);

        // Validate user changes
        editDataValidator(filteredChangesObject);

        // Update user
        const updatedUser = await usersDB.updateUser(
            userId,
            filteredChangesObject,
        );
        return updatedUser;
    };
}
