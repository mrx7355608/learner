import editUserFactory from "./edit-user.js";
import removeUserFactory from "./remove-user.js";
import fetchUserProfileFactory from "./fetch-profile.js";
import { usersDB } from "../user.data.js";

const userServices = {
    editUser: editUserFactory({ usersDB }),
    removeUser: removeUserFactory({ usersDB }),
    fetchUserProfile: fetchUserProfileFactory({ usersDB }),
};

export default userServices;
