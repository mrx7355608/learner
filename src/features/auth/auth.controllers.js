const logout = async (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }

        return res.status(200).json({
            ok: true,
            data: null,
        });
    });
};

export const authControllers = {
    logout,
};
