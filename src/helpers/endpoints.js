const endPoints = {
    login: {
        url: "/login-user",
        isProtected: false,
        method: "post"
    },
    updateCall: {
        url: "update",
        isProtected: true,
        method: "patch"
    },


}
export default endPoints