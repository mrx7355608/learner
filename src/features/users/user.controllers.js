import userServices from "./services";
import { catchAsyncError } from "../../utils/catchAsyncError.js";

const editUser = catchAsyncError(async (httpObject) => {
    const userId = httpObject.user._id;
    const changes = httpObject.body;
    const editedUser = await userServices.editUser(userId, changes);
    return {
        status: 200,
        data: editedUser,
    };
});

const deleteUser = catchAsyncError(async (httpObject) => {
    const userId = httpObject.user._id;
    await userServices.removeUser(userId);
    return {
        statsus: 204,
        data: null,
    };
});

const getUserProfile = catchAsyncError(async (httpObject) => {
    const { userID } = httpObject.params;
    const user = await userServices.listUserProfile(userID);
    return {
        status: 200,
        data: user,
    };
});

const getLoggedInUser = catchAsyncError(async (httpObject) => {
    const { user } = httpObject;

    user.email = undefined;
    user.__v = undefined;
    user.updatedAt = undefined;

    return {
        status: 200,
        data: user,
    };
});

export const userControllers = {
    followUser,
    unfollowUser,
    editUser,
    deleteUser,
    getUserProfile,
    getLoggedInUser,
    searchUsers,
    getUserFollowers,
    getUserFollowings,
};
