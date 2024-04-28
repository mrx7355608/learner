export default function removeUserFactory({ usersDB }) {
    return async function (id) {
        await usersDB.deleteUser(id);
        return null;
    };
}
