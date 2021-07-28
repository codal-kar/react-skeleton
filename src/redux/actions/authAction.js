export const login = (userData) => {
    return ({
        type: 'LOGIN',
        ...userData
    })
};
export const logout = () => ({
    type: 'LOGOUT'
});

export const update = (userData) => ({
    type: 'UPDATE',
    ...userData
});

